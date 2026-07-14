import os, json, re

base = os.getcwd()
print("Base:", base)

# Read folder 1
f1_path = os.path.join(base, "Sliding In 1", "index.html")
with open(f1_path, "r", encoding="utf-8") as f:
    f1 = f.read()

# Extract JS
s1 = f1.find("<script>\nvar lessonData")
s2 = f1.find("</script>\n<script>window.localImageMap")
template_js = f1[s1 + len("<script>"):s2] if s1 >= 0 and s2 >= 0 else ""
print("Template JS:", len(template_js), "chars")

# Extract CSS
c1 = f1.find("<style>")
c2 = f1.find("</style>")
template_css = f1[c1 + 7:c2] if c1 >= 0 and c2 >= 0 else ""
print("Template CSS:", len(template_css), "chars")

# Extract pre/post HTML
template_pre = f1[:c1] if c1 >= 0 else ""
post_start = f1.find("</script>", s2 + len("</script>\n<script>window.localImageMap"))
template_post = f1[post_start + len("</script>"):] if post_start >= 0 else ""

for fn in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(fn))
    
    # Read data files
    with open(os.path.join(folder, "lesson-data.json"), "r", encoding="utf-8") as f:
        lesson_json = json.dumps(json.load(f), separators=(",", ":"))
    with open(os.path.join(folder, "mapping-data.json"), "r", encoding="utf-8") as f:
        mapping_json = json.dumps(json.load(f), separators=(",", ":"))
    with open(os.path.join(folder, "sliding-in-image-map.js"), "r", encoding="utf-8") as f:
        imagemap_js = f.read()
    imagemap_obj = re.search(r"window\.localImageMap = (\{[\s\S]+\});", imagemap_js)
    imagemap_json = imagemap_obj.group(1) if imagemap_obj else "{}"
    
    # Copy template JS and replace data
    new_js = template_js
    
    # Replace lessonData
    ld_start = new_js.find("window.lessonData = [")
    if ld_start >= 0:
        depth, i = 0, ld_start
        while i < len(new_js):
            if new_js[i] == "[": depth += 1
            elif new_js[i] == "]":
                depth -= 1
                if depth == 0:
                    ld_end = i + 2
                    break
            i += 1
        new_js = new_js[:ld_start] + "window.lessonData = " + lesson_json + ";\nlessonData = window.lessonData;" + new_js[ld_end:]
    
    # Replace mappingData
    md_start = new_js.find("var mappingData = [")
    if md_start >= 0:
        depth, i = 0, md_start
        while i < len(new_js):
            if new_js[i] == "[": depth += 1
            elif new_js[i] == "]":
                depth -= 1
                if depth == 0:
                    md_end = i + 2
                    break
            i += 1
        new_js = new_js[:md_start] + "var mappingData = " + mapping_json + ";" + new_js[md_end:]
    
    # Read original HTML for structure
    with open(os.path.join(folder, "index.html"), "r", encoding="utf-8") as f:
        orig = f.read()
    
    orig_css_start = orig.find("<style>")
    orig_css_end = orig.find("</style>")
    html_pre = orig[:orig_css_start] if orig_css_start >= 0 else template_pre
    html_post = orig[orig_css_end + 8:] if orig_css_end >= 0 else template_post
    
    # Assemble
    new_html = html_pre + "<style>" + template_css + "</style>" + "<script>" + new_js + "</script>"
    new_html += "<script>window.localImageMap = " + imagemap_json + ";</script>" + html_post
    
    with open(os.path.join(folder, "index.html"), "w", encoding="utf-8") as f:
        f.write(new_html)
    
    # Verify
    with open(os.path.join(folder, "index.html"), "r", encoding="utf-8") as f:
        check = f.read()
    
    scripts = re.findall(r"<script>([\s\S]*?)</script>", check)
    js_len = len(scripts[0]) if scripts else 0
    
    print("Sliding In {}: js={}KB vocab={} rgb={} lesson={} mapping={}".format(
        fn, js_len // 1024,
        "vocab-word" in check,
        "--bg-rgb" in check,
        "window.lessonData = [{" in check,
        "var mappingData = [{" in check
    ))

print("\nDone!")

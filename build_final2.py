import os, json, re, sys

base = os.path.dirname(os.path.abspath(__file__))

# Read folder 1 template
f1_path = os.path.join(base, "Sliding In 1", "index.html")
with open(f1_path, "r", encoding="utf-8") as f:
    f1 = f.read()

# Extract CSS
css = f1[f1.find("<style>")+7 : f1.find("</style>")]

# Extract JS (between <script> before lessonData and </script> before localImageMap)
js_start = f1.rfind("<script>", 0, f1.find("window.lessonData")) + 8
js_end = f1.find("</script>\n<script>window.localImageMap")
js = f1[js_start:js_end]

# Extract head (before <style>)
head = f1[:f1.find("<style>")]

# Find data placeholders
ld_start = js.find("window.lessonData = [")
ld_end = js.find("];\nlessonData = window.lessonData;", ld_start) + 2
ld_ph = js[ld_start:ld_end]

md_start = js.find("var mappingData = [")
md_end = js.find("];", md_start) + 2
md_ph = js[md_start:md_end]

print("Template: css={} js={} ld_ph={} md_ph={}".format(len(css), len(js), len(ld_ph), len(md_ph)))

# Build each folder
for fn in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(fn))
    
    # Read data
    with open(os.path.join(folder, "lesson-data.json"), "r", encoding="utf-8") as f:
        ld = json.load(f)
    with open(os.path.join(folder, "mapping-data.json"), "r", encoding="utf-8") as f:
        md = json.load(f)
    with open(os.path.join(folder, "sliding-in-image-map.js"), "r", encoding="utf-8") as f:
        img = f.read()
    
    ld_json = json.dumps(ld, separators=(",", ":"))
    md_json = json.dumps(md, separators=(",", ":"))
    
    img_match = re.search(r"window\.localImageMap = (\{[\s\S]+\});", img)
    img_json = img_match.group(1) if img_match else "{}"
    
    # Replace data in JS
    new_js = js.replace(ld_ph, "window.lessonData = " + ld_json + ";\nlessonData = window.lessonData;")
    new_js = new_js.replace(md_ph, "var mappingData = " + md_json + ";")
    
    # Read original body
    with open(os.path.join(folder, "index.html"), "r", encoding="utf-8") as f:
        orig = f.read()
    
    body_start = orig.find("<body")
    body_end = orig.find("</body>") + 7
    body = orig[body_start:body_end] if body_start >= 0 else "<body></body>"
    
    # Assemble
    html = head
    html += "<style>" + css + "</style>"
    html += "<script>" + new_js + "</script>"
    html += "<script>window.localImageMap = " + img_json + ";</script>"
    html += body
    
    out_path = os.path.join(folder, "index.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    
    # Verify
    ok_ld = "window.lessonData = [{" in html
    ok_md = "var mappingData = [{" in html
    ok_css = "vocab-word" in html
    ok_rgb = "--bg-rgb" in html
    
    print("Sliding In {}: {}KB ld={} md={} css={} rgb={}".format(
        fn, len(html)//1024, ok_ld, ok_md, ok_css, ok_rgb))

print("Done!")

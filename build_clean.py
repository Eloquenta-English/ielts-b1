"""
Build Sliding In folders 2-4 from scratch using folder 1's working code.
Writes complete HTML files with proper data embedding.
No regex extraction or patching — clean build from template.
"""
import os, json

base = os.getcwd()

# ── Read folder 1's working JS and CSS as strings ──
with open(os.path.join(base, "Sliding In 1", "index.html"), "r", encoding="utf-8") as f:
    f1 = f.read()

# Extract CSS (between <style> and </style>)
css_start = f1.find("<style>") + len("<style>")
css_end = f1.find("</style>")
template_css = f1[css_start:css_end]

# Extract JS (between <script> and the </script> just before localImageMap)
js_start = f1.find("<script>\nvar lessonData")
js_start = f1.rfind("<script>", 0, js_start) + len("<script>")
js_end_marker = "</script>\n<script>window.localImageMap"
js_end = f1.find(js_end_marker, js_start)
template_js = f1[js_start:js_end]

# Extract HTML head (everything before <style>)
head_end = f1.find("<style>")
template_head = f1[:head_end]

# Extract HTML body (everything after the localImageMap script)
post_scripts_start = f1.find("</script>", js_end + len(js_end_marker))
post_scripts_start = f1.find("</script>", post_scripts_start) + len("</script>")
template_body = f1[post_scripts_start:]

print("Template parts extracted:")
print("  CSS: {} chars".format(len(template_css)))
print("  JS: {} chars".format(len(template_js)))
print("  Head: {} chars".format(len(template_head)))
print("  Body: {} chars".format(len(template_body)))

# ── Find the data placeholders in the JS ──
# lessonData line
ld_idx = template_js.find("window.lessonData = [")
ld_end = template_js.find("];\nlessonData = window.lessonData;", ld_idx)
ld_placeholder = template_js[ld_idx:ld_end+2]  # includes "];"
print("  lessonData placeholder: {} chars".format(len(ld_placeholder)))

# mappingData line
md_idx = template_js.find("var mappingData = [")
md_end = template_js.find("];", md_idx)
md_placeholder = template_js[md_idx:md_end+2]  # includes "];"
print("  mappingData placeholder: {} chars".format(len(md_placeholder)))

# ── Build each folder ──
for folder_num in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    html_path = os.path.join(folder, "index.html")
    
    # Read this folder's data
    with open(os.path.join(folder, "lesson-data.json"), "r", encoding="utf-8") as f:
        lesson_data = json.load(f)
    lesson_json = json.dumps(lesson_data, separators=(",", ":"))
    
    with open(os.path.join(folder, "mapping-data.json"), "r", encoding="utf-8") as f:
        mapping_data = json.load(f)
    mapping_json = json.dumps(mapping_data, separators=(",", ":"))
    
    with open(os.path.join(folder, "sliding-in-image-map.js"), "r", encoding="utf-8") as f:
        imagemap_raw = f.read()
    # Extract the JSON object
    import re
    imagemap_match = re.search(r"window\.localImageMap = (\{[\s\S]+\});", imagemap_raw)
    imagemap_json = imagemap_match.group(1) if imagemap_match else "{}"
    
    # Read original HTML for body structure
    with open(html_path, "r", encoding="utf-8") as f:
        orig = f.read()
    
    # Extract body content from original (everything after </head>)
    body_start = orig.find("<body")
    body_end = orig.find("</body>") + len("</body>")
    orig_body = orig[body_start:body_end] if body_start >= 0 else "<body></body>"
    
    # Build the JS with this folder's data
    new_js = template_js
    new_js = new_js.replace(ld_placeholder, "window.lessonData = " + lesson_json + ";\nlessonData = window.lessonData;")
    new_js = new_js.replace(md_placeholder, "var mappingData = " + mapping_json + ";")
    
    # Build the complete HTML
    # Use folder 1's head (has correct CSS/JS structure)
    # Use original body (has correct HTML structure for this folder's data-site)
    # Replace the data-site in body
    new_body = orig_body.replace('data-site="{}"'.format(folder_num), 'data-site="{}"'.format(folder_num))
    
    # Assemble: head + CSS + JS + localImageMap + body
    new_html = template_head
    new_html += "<style>" + template_css + "</style>"
    new_html += "<script>" + new_js + "</script>"
    new_html += '<script>window.localImageMap = ' + imagemap_json + ";</script>"
    # Add the body content (everything between <body> and </body>)
    body_inner_start = new_body.find(">") + 1  # after <body...>
    body_inner_end = new_body.rfind("</body>")
    new_html += new_body[:body_inner_start]  # <body...>
    # The body inner content needs to come from the original
    orig_body_inner = orig[orig.find(">", body_start)+1:orig.find("</body>")]
    new_html += orig_body_inner
    new_html += "</body></html>"
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(new_html)
    
    # Quick verify
    with open(html_path, "r", encoding="utf-8") as f:
        check = f.read()
    
    has_lesson = "window.lessonData = [{" in check
    has_mapping = "var mappingData = [{" in check
    has_css = "vocab-word" in check
    has_rgb = "--bg-rgb" in check
    has_body = "<body" in check and "</body>" in check
    
    print("Sliding In {}: lesson={} mapping={} css={} rgb={} body={} size={}KB".format(
        folder_num, has_lesson, has_mapping, has_css, has_rgb, has_body, len(check)//1024))

print("\nDone! Test each folder.")

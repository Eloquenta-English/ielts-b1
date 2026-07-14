"""
Build folders 2-4 from folder 1's working template.
Replaces only the data sections, preserving all JS/CSS structure.
"""
import os, json, re

base = r"C:\Users\irieb\Documents\William's Projects\workspace\esl-materials"

# Read folder 1's working HTML as template
with open(os.path.join(base, "Sliding In 1", "index.html"), 'r', encoding='utf-8') as f:
    template = f.read()

# Verify template is valid
try:
    compile(template, 'template', 'exec')
    print("Template: VALID")
except:
    print("Template: Python compile failed (may still work in browser)")

# Extract the JS portion from template (everything between <script> and </script> before localImageMap)
js_match = re.search(r'<script>([\s\S]+?)</script>\s*<script>window\.localImageMap', template)
template_js = js_match.group(1) if js_match else ""
print("Template JS: {} chars".format(len(template_js)))

# Extract the CSS portion
css_match = re.search(r'<style>([\s\S]+?)</style>', template)
template_css = css_match.group(1) if css_match else ""
print("Template CSS: {} chars".format(len(template_css)))

# Extract the HTML before <style>
pre_match = re.search(r'([\s\S]+?)<style>', template)
template_pre = pre_match.group(1) if pre_match else ""
print("Template pre-CSS: {} chars".format(len(template_pre)))

# Extract the HTML after the scripts (from after localImageMap </script> to end)
post_match = re.search(r'</script>\s*<script>window\.localImageMap[\s\S]+?</script>([\s\S]+)', template)
template_post = post_match.group(1) if post_match else ""
print("Template post-scripts: {} chars".format(len(template_post)))

for folder_num in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    html_path = os.path.join(folder, "index.html")
    json_path = os.path.join(folder, "lesson-data.json")
    mapping_path = os.path.join(folder, "mapping-data.json")
    imagemap_path = os.path.join(folder, "sliding-in-image-map.js")
    
    # Read folder's own data
    with open(json_path, 'r', encoding='utf-8') as f:
        lesson_data = json.load(f)
    lesson_json = json.dumps(lesson_data, separators=(',', ':'))
    
    with open(mapping_path, 'r', encoding='utf-8') as f:
        mapping_data = json.load(f)
    mapping_json = json.dumps(mapping_data, separators=(',', ':'))
    
    with open(imagemap_path, 'r', encoding='utf-8') as f:
        imagemap_js = f.read()
    imagemap_obj = re.search(r'window\.localImageMap = (\{[\s\S]+\});', imagemap_js)
    imagemap_json = imagemap_obj.group(1) if imagemap_obj else "{}"
    
    # Read folder's original HTML to get the correct structure
    with open(html_path, 'r', encoding='utf-8') as f:
        orig = f.read()
    
    # Extract the HTML structure from the original (before <style>)
    orig_pre = re.search(r'([\s\S]+?)<style>', orig)
    html_pre = orig_pre.group(1) if orig_pre else template_pre
    
    # Extract the HTML after the scripts
    orig_post = re.search(r'</script>\s*<script[^>]*>[\s\S]+?</script>([\s\S]+)', orig)
    html_post = orig_post.group(1) if orig_post else template_post
    
    # Get data-site from original
    site_match = re.search(r'data-site="(\d+)"', orig)
    site_num = site_match.group(1) if site_match else str(folder_num)
    
    # Build the JS with this folder's data
    # Start with template JS and replace the data portions
    new_js = template_js
    
    # Replace lessonData: find "window.lessonData = [...]" and replace
    new_js = re.sub(
        r'window\.lessonData = \[[\s\S]+?\];\s*\nlessonData = window\.lessonData;',
        'window.lessonData = ' + lesson_json + ';\nlessonData = window.lessonData;',
        new_js
    )
    
    # Replace mappingData: find "var mappingData = [...]" and replace
    new_js = re.sub(
        r'var mappingData = \[[\s\S]+?\];',
        'var mappingData = ' + mapping_json + ';',
        new_js
    )
    
    # Build the localImageMap script
    new_localmap = '<script>window.localImageMap = ' + imagemap_json + ';</script>'
    
    # Assemble the HTML
    new_html = html_pre + '<style>' + template_css + '</style>' + new_js + new_localmap + html_post
    
    # Fix data-site
    new_html = re.sub(r'data-site="\d+"', 'data-site="' + site_num + '"', new_html)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    # Verify
    with open(html_path, 'r', encoding='utf-8') as f:
        check = f.read()
    
    has_vocab = 'vocab-word' in check
    has_theme_rgb = '--bg-rgb' in check
    has_lesson = 'window.lessonData = [{' in check
    has_mapping = 'var mappingData = [{' in check
    has_localmap = 'window.localImageMap = {' in check
    js_len = len(re.search(r'<script>([\s\S]+?)</script>', check).group(1)) if re.search(r'<script>([\s\S]+?)</script>', check) else 0
    
    print("Sliding In {}: vocab={} rgb={} lesson={} mapping={} localmap={} js={}KB".format(
        folder_num, has_vocab, has_theme_rgb, has_lesson, has_mapping, has_localmap, js_len//1024))

print("\nDone! Test each folder in the browser.")

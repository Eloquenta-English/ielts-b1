"""
Build script: Apply folder 1's working JS/CSS to folders 2-4.
"""
import os, json, re

base = r"C:\Users\irieb\Documents\William's Projects\workspace\esl-materials"

# Read folder 1's working HTML
with open(os.path.join(base, "Sliding In 1", "index.html"), 'r', encoding='utf-8') as f:
    template = f.read()

# Extract the CSS section
css_match = re.search(r'<style>([\s\S]+?)</style>', template)
template_css = css_match.group(1)

# Extract the first script block (includes <script> tag, up to but not including </script> before localImageMap)
script_match = re.search(r'(<script>[\s\S]+?)</script>\s*<script>window\.localImageMap', template)
template_script = script_match.group(1)

# Extract localImageMap prefix/suffix
localmap_match = re.search(r'(<script>window\.localImageMap = )[\s\S]+?(</script>)', template)
localmap_prefix = localmap_match.group(1)
localmap_suffix = localmap_match.group(2)

print("Template: CSS={} script={}".format(len(template_css), len(template_script)))

for folder_num in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    html_path = os.path.join(folder, "index.html")
    json_path = os.path.join(folder, "lesson-data.json")
    mapping_path = os.path.join(folder, "mapping-data.json")
    imagemap_path = os.path.join(folder, "sliding-in-image-map.js")
    
    # Read data files
    with open(json_path, 'r', encoding='utf-8') as f:
        lesson_json = json.dumps(json.load(f), separators=(',', ':'))
    with open(mapping_path, 'r', encoding='utf-8') as f:
        mapping_json = json.dumps(json.load(f), separators=(',', ':'))
    with open(imagemap_path, 'r', encoding='utf-8') as f:
        imagemap_js = f.read()
    imagemap_obj = re.search(r'window\.localImageMap = (\{[\s\S]+\});', imagemap_js)
    imagemap_json = imagemap_obj.group(1) if imagemap_obj else "{}"
    
    # Read original HTML
    with open(html_path, 'r', encoding='utf-8') as f:
        orig = f.read()
    
    # Extract HTML parts from original
    prefix_match = re.search(r'([\s\S]+?)<style>', orig)
    prefix = prefix_match.group(1) if prefix_match else ""
    suffix_match = re.search(r'</script>\s*<script[^>]*>[\s\S]+?</script>([\s\S]+)', orig)
    suffix = suffix_match.group(1) if suffix_match else ""
    
    # Build new script: start with template, replace data portions
    new_script = template_script
    
    # Replace the lessonData line (window.lessonData = [...];\nlessonData = window.lessonData;)
    # Find the pattern: window.lessonData = [BIG_JSON];\nlessonData = window.lessonData;
    ld_pattern = re.compile(r'window\.lessonData = \[.*?\];\s*\nlessonData = window\.lessonData;', re.DOTALL)
    new_script = ld_pattern.sub('window.lessonData = ' + lesson_json + ';\nlessonData = window.lessonData;', new_script)
    
    # Replace the mappingData line
    md_pattern = re.compile(r'var mappingData = \[.*?\];', re.DOTALL)
    new_script = md_pattern.sub('var mappingData = ' + mapping_json + ';', new_script)
    
    # Build localImageMap
    new_localmap = localmap_prefix + imagemap_json + localmap_suffix
    
    # Assemble HTML
    new_html = prefix + '<style>' + template_css + '</style>' + new_script + new_localmap + suffix
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    # Quick verify
    ok = 'vocab-word' in new_html and '--bg-rgb' in new_html and 'window.lessonData = [{' in new_html
    print("Sliding In {}: {} ({}KB)".format(folder_num, 'OK' if ok else 'CHECK', len(new_html)//1024))

print("\nDone!")

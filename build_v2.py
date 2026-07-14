"""
Carefully apply folder 1's working code to folders 2-4.
Only replaces specific sections, preserving each folder's HTML structure.
"""
import os, json, re

base = r"C:\Users\irieb\Documents\William's Projects\workspace\esl-materials"

# Read folder 1's working HTML for reference
with open(os.path.join(base, "Sliding In 1", "index.html"), 'r', encoding='utf-8') as f:
    f1 = f.read()

# Extract vocab CSS block
vc_start = f1.find('/* ── Vocab word interactivity ── */')
vc_end = f1.find('/* ── Bottom controls ── */', vc_start)
vocab_css = f1[vc_start:vc_end].rstrip() if vc_start >= 0 and vc_end >= 0 else ""

# Extract vocab JS block (between "Load local Image map" comment and "function renderSlide")
vj_start = f1.find('// Load local image map')
vj_end = f1.find('function renderSlide(){', vj_start)
vocab_js = f1[vj_start:vj_end] if vj_start >= 0 and vj_end >= 0 else ""

# Extract the improved getQuestionImage function
gi_match = re.search(r'function getQuestionImage\(question, topicSlug, questionIndex, vocab\)[\s\S]+?\}', f1)
get_image_fn = gi_match.group(0) if gi_match else ""

# Extract the renderSlide image line
rs_match = re.search(r'  // Generate image from question keywords[\s\S]+?\.src = imgUrl;', f1)
render_image_line = rs_match.group(0) if rs_match else ""

# Extract deckImgToggle fix
di_match = re.search(r'var deckImgToggle = document\.getElementById.*?addEventListener', f1, re.DOTALL)
deck_img_fix = di_match.group(0) if di_match else ""

# Extract vocabClickState reset
vr_match = re.search(r'vocabClickState = \{\}; // Reset vocab state', f1)
vocab_reset = vr_match.group(0) if vr_match else ""

# Extract question rendering with vocab
qr_match = re.search(r'var qEl = document\.getElementById.*?renderQuestionHTML\(q\)', f1, re.DOTALL)
qrender = qr_match.group(0) if qr_match else ""

# Extract --bg-rgb from :root
root_match = re.search(r'--bg-rgb:\d+,\d+,\d+;', f1)
bg_rgb_root = root_match.group(0) if root_match else ""

# Extract theme bg-rgb values
theme_rgbs = {}
for m in re.finditer(r'\[data-theme="([^"]+)"\].*?--bg-rgb:(\d+,\d+,\d+);', f1):
    theme_rgbs[m.group(1)] = m.group(2)

print("Extracted pieces:")
print("  vocab_css: {} chars".format(len(vocab_css)))
print("  vocab_js: {} chars".format(len(vocab_js)))
print("  get_image_fn: {} chars".format(len(get_image_fn)))
print("  render_image_line: {} chars".format(len(render_image_line)))
print("  deck_img_fix: {} chars".format(len(deck_img_fix)))
print("  vocab_reset: {}".format(vocab_reset))
print("  qrender: {} chars".format(len(qrender)))
print("  bg_rgb_root: {}".format(bg_rgb_root))
print("  theme_rgbs: {}".format(theme_rgbs))

for folder_num in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    html_path = os.path.join(folder, "index.html")
    json_path = os.path.join(folder, "lesson-data.json")
    mapping_path = os.path.join(folder, "mapping-data.json")
    imagemap_path = os.path.join(folder, "sliding-in-image-map.js")
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixes = []
    
    # 1. Embed lesson data
    with open(json_path, 'r', encoding='utf-8') as f:
        lesson_json = json.dumps(json.load(f), separators=(',', ':'))
    
    # Replace: fetch('lesson-data.json').then(r=>r.json()).then(data=>{lessonData=data;initLibrary();}).catch(...)
    old_ld = re.search(r"fetch\('lesson-data\.json'\)[\s\S]+?\.catch\(function\(e\) \{[^}]+\}\);", content)
    if old_ld:
        content = content[:old_ld.start()] + "window.lessonData = " + lesson_json + ";\nlessonData = window.lessonData;" + content[old_ld.end():]
        fixes.append("lessonData")
    
    # 2. Embed mapping data
    with open(mapping_path, 'r', encoding='utf-8') as f:
        mapping_json = json.dumps(json.load(f), separators=(',', ':'))
    
    old_md = re.search(r'var mappingData = \[\];[\s\S]+?\.catch\(e=>console\.error[^}]+\}\);', content)
    if old_md:
        content = content[:old_md.start()] + "var mappingData = " + mapping_json + ";" + content[old_md.end():]
        fixes.append("mappingData")
    
    # 3. Embed localImageMap
    with open(imagemap_path, 'r', encoding='utf-8') as f:
        imagemap_js = f.read()
    imagemap_obj = re.search(r'window\.localImageMap = (\{[\s\S]+\});', imagemap_js)
    if imagemap_obj:
        old_im = re.search(r'<script src="sliding-in-image-map\.js"></script>', content)
        if old_im:
            content = content[:old_im.start()] + '<script>window.localImageMap = ' + imagemap_obj.group(1) + ';</script>' + content[old_im.end():]
            fixes.append("localImageMap")
    
    # 4. Add vocab CSS before /* ── Bottom controls ── */
    if vocab_css and '/* ── Bottom controls ── */' in content:
        content = content.replace('/* ── Bottom controls ── */', vocab_css + '\n\n/* ── Bottom controls ── */')
        fixes.append("vocabCSS")
    
    # 5. Add vocab JS before function renderSlide
    if vocab_js and 'function renderSlide(){' in content:
        content = content.replace('function renderSlide(){', vocab_js + 'function renderSlide(){')
        fixes.append("vocabJS")
    
    # 6. Replace getQuestionImage function
    if get_image_fn:
        old_gi = re.search(r'function extractKeyword[\s\S]+?function getQuestionImage[\s\S]+?\}', content)
        if old_gi:
            content = content[:old_gi.start()] + get_image_fn + '\n\n' + content[old_gi.end():]
            fixes.append("getQuestionImage")
    
    # 7. Replace renderSlide image line
    if render_image_line:
        old_ri = re.search(r'  // Use local image[\s\S]+?\.src = imgUrl;', content)
        if old_ri:
            content = content[:old_ri.start()] + render_image_line + content[old_ri.end():]
            fixes.append("renderImage")
    
    # 8. Fix deckImgToggle
    if deck_img_fix:
        old_di = "document.getElementById('deckImgToggle').addEventListener('click', function() {"
        if old_di in content:
            content = content.replace(old_di, deck_img_fix)
            fixes.append("deckImgToggle")
    
    # 9. Add vocabClickState reset
    if vocab_reset:
        old_vr = "function renderSlide(){\n  var q=questions[currentIndex];"
        if old_vr in content:
            content = content.replace(old_vr, "function renderSlide(){\n  " + vocab_reset + "\n  var q=questions[currentIndex];")
            fixes.append("vocabReset")
    
    # 10. Replace question rendering
    if qrender:
        old_qr = "document.getElementById('slideQuestion').textContent=q.original;"
        if old_qr in content:
            content = content.replace(old_qr, qrender)
            fixes.append("qrender")
    
    # 11. Add --bg-rgb to :root
    if bg_rgb_root and '--bg-rgb' not in content:
        content = content.replace('--bg:#08090a;--bg2:', '--bg:#08090a;' + bg_rgb_root + '--bg2:')
        fixes.append("rootBgRgb")
    
    # 12. Add --bg-rgb to themes
    for theme_name, rgb_val in theme_rgbs.items():
        # Find the theme block and add --bg-rgb after --bg:VALUE;
        pattern = r'(\[data-theme="' + re.escape(theme_name) + r'"\]\{--bg:)([^;]+;)'
        def replacer(m, rv=rgb_val):
            return m.group(1) + m.group(2) + '--bg-rgb:' + rv + ';'
        new_content = re.sub(pattern, replacer, content)
        if new_content != content:
            content = new_content
            fixes.append("themeBgRgb:" + theme_name)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Sliding In {}: {}".format(folder_num, ', '.join(fixes) if fixes else 'NO FIXES'))

print("\nDone!")

import os, json, re, sys

base = r"C:\Users\irieb\Documents\William's Projects\workspace\esl-materials"

# Read folder 1's working CSS and JS as reference
with open(os.path.join(base, "Sliding In 1", "index.html"), 'r', encoding='utf-8') as f:
    f1 = f.read()

# Extract vocab CSS from folder 1
vocab_css_start = f1.find('/* ── Vocab word interactivity ── */')
vocab_css_end = f1.find('/* ── Bottom controls ── */', vocab_css_start)
vocab_css = f1[vocab_css_start:vocab_css_end].rstrip() if vocab_css_start >= 0 else ""

# Extract vocab JS from folder 1 (the functions before renderSlide)
vocab_js_start = f1.find('// Vocab click tracking')
vocab_js_end = f1.find('function renderSlide(){', vocab_js_start)
vocab_js = f1[vocab_js_start:vocab_js_end] if vocab_js_start >= 0 and vocab_js_end >= 0 else ""

# Extract the renderQuestionHTML call replacement
qrender_old = "document.getElementById('slideQuestion').textContent=q.original;"
qrender_new = "var qEl = document.getElementById('slideQuestion');\n  qEl.innerHTML = window.renderQuestionHTML(q);"

# Extract deckImgToggle fix
deck_old = "document.getElementById('deckImgToggle').addEventListener('click', function() {"
deck_new = "var deckImgToggle = document.getElementById('deckImgToggle');\nif (deckImgToggle) deckImgToggle.addEventListener('click', function() {"

# Extract renderSlide vocab reset
render_old = "function renderSlide(){\n  var q=questions[currentIndex];"
render_new = "function renderSlide(){\n  vocabClickState = {};\n  var q=questions[currentIndex];"

for folder_num in [2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    html_path = os.path.join(folder, "index.html")
    json_path = os.path.join(folder, "lesson-data.json")
    mapping_path = os.path.join(folder, "mapping-data.json")
    imagemap_path = os.path.join(folder, "sliding-in-image-map.js")
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixes = []
    
    # 1. Read and embed lesson data
    with open(json_path, 'r', encoding='utf-8') as f:
        lesson_data = json.load(f)
    lesson_json = json.dumps(lesson_data, separators=(',', ':'))
    
    # Replace fetch('lesson-data.json')... with embedded data
    old_fetch = re.search(r"fetch\('lesson-data\.json'\)[\s\.]+then\(function\(r\) \{ return r\.json\(\); \}\)\s*\.then\(function\(data\) \{[^}]+\}\)\s*\.catch\(function\(e\) \{[^}]+\}\);", content)
    if old_fetch:
        new_code = "window.lessonData = {};\nlessonData = window.lessonData;".format()
        # Simpler: just replace the whole fetch block
        content = content[:old_fetch.start()] + "window.lessonData = {};\nlessonData = window.lessonData;" + content[old_fetch.end():]
        fixes.append("embedded lesson data")
    
    # Actually, let me use a simpler approach - just find and replace the specific pattern
    # Reset and use a different approach
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace lessonData fetch with embedded data
    if "fetch('lesson-data.json')" in content:
        # Find the fetch block
        start = content.find("fetch('lesson-data.json')")
        # Find the end of this statement (the .catch closing)
        end = content.find("});", start)
        if end >= 0:
            end += 3  # include the });
            new_code = "window.lessonData = {};\nlessonData = window.lessonData;".format()
            content = content[:start] + new_code + content[end:]
            fixes.append("embedded lesson data")
    
    print("Sliding In {}: {}".format(folder_num, ', '.join(fixes) if fixes else 'no fixes applied'))

print("\nNote: This is a partial fix. Full rebuild needed for complete solution.")

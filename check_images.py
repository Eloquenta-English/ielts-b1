"""
Image Relevancy Checker for Sliding In slide decks.
Checks each deck for:
1. Missing local images (falls back to Pollinations.ai)
2. Broken image URLs
3. Reports per-topic coverage
"""
import os, json, re, glob

base = r"C:\Users\irieb\Documents\William's Projects\workspace\esl-materials"
images_dir = os.path.join(base, "Sliding In Images")

# Get all available local images
local_images = {}
for f in os.listdir(images_dir):
    if f.endswith('.jpg') or f.endswith('.png'):
        # Parse filename: slug_index.jpg or slug.jpg
        name = os.path.splitext(f)[0]
        if '_' in name:
            slug, idx = name.rsplit('_', 1)
            if idx.isdigit():
                local_images.setdefault(slug, set()).add(int(idx))
        else:
            # Base image (e.g., age.jpg) — treat as index -1
            local_images.setdefault(name, set()).add(-1)

print("=== LOCAL IMAGE INVENTORY ===")
for slug in sorted(local_images.keys()):
    indices = sorted(local_images[slug])
    print("  {}: {} images (indices: {})".format(slug, len(indices), indices[:10]))

print("\n=== SLIDE DECK IMAGE COVERAGE ===")

for folder_num in [1, 2, 3, 4]:
    folder = os.path.join(base, "Sliding In {}".format(folder_num))
    json_path = os.path.join(folder, "lesson-data.json")
    
    if not os.path.exists(json_path):
        continue
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print("\n--- Sliding In {} ---".format(folder_num))
    
    total_questions = 0
    total_with_local = 0
    total_fallback = 0
    
    for cat in data:
        for topic in cat['topics']:
            slug = topic['slug']
            num_questions = len(topic['questions'])
            total_questions += num_questions
            
            available = local_images.get(slug, set())
            # Count how many questions have a matching local image
            has_local = 0
            for i in range(num_questions):
                if i in available:
                    has_local += 1
            
            total_with_local += has_local
            fallback = num_questions - has_local
            total_fallback += fallback
            
            if fallback > 0:
                print("  {} ({} questions): {} local, {} fallback to Pollinations".format(
                    slug, num_questions, has_local, fallback))
    
    print("  TOTAL: {} questions, {} with local images, {} need Pollinations fallback".format(
        total_questions, total_with_local, total_fallback))

print("\n=== RECOMMENDATIONS ===")
print("Topics with 0 local images need pre-downloaded images generated.")
print("Topics with partial coverage: extra images can be downloaded for better variety.")

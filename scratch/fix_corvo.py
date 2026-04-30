
import os

def fix_file(file_path, target, replacement):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target in content:
        new_content = content.replace(target, replacement)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully replaced target in {file_path}")
    else:
        print(f"Target not found in {file_path}")

file_path = r'c:\corvo-bot-corrigido\corvo.js'

# Fix 1: carouselMessage: case 'ytvideo':
fix_file(file_path, "carouselMessage:           case 'ytvideo':", "carouselMessage: { cards }")

# Fix 2: site(quote, 40, 40)
fix_file(file_path, "site(quote, 40, 40)", "moldura.composite(quote, 40, 40)")

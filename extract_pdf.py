#!/usr/bin/env python3
"""
Simple PDF text extractor
"""
import sys
import subprocess

def extract_with_textutil():
    """Try to extract text using macOS textutil"""
    try:
        result = subprocess.run([
            'textutil', '-convert', 'txt', '-stdout', 'resume.pdf'
        ], capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout
    except Exception as e:
        print(f"textutil failed: {e}")
    return None

def extract_with_mdls():
    """Try to extract text using macOS mdls"""
    try:
        result = subprocess.run([
            'mdls', '-name', 'kMDItemTextContent', 'resume.pdf'
        ], capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout
    except Exception as e:
        print(f"mdls failed: {e}")
    return None

def main():
    # Try different extraction methods
    text = extract_with_textutil()
    if text:
        print("=== EXTRACTED TEXT FROM RESUME.PDF ===")
        print(text)
        return
    
    text = extract_with_mdls()
    if text:
        print("=== EXTRACTED TEXT FROM RESUME.PDF ===")
        print(text)
        return
    
    print("Could not extract text from PDF. Please try:")
    print("1. Copy text directly from PDF viewer")
    print("2. Use online PDF to text converter")
    print("3. Share the resume content manually")

if __name__ == "__main__":
    main()
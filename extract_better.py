#!/usr/bin/env python3
"""
Better PDF text extraction using different methods
"""
import subprocess
import re

def extract_with_pdftotext():
    """Try to extract text using pdftotext if available"""
    try:
        result = subprocess.run([
            'pdftotext', '-layout', 'resume.pdf', '-'
        ], capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout
    except Exception as e:
        print(f"pdftotext failed: {e}")
    return None

def extract_with_mdls_content():
    """Extract text content using mdls"""
    try:
        result = subprocess.run([
            'mdls', '-name', 'kMDItemTextContent', '-raw', 'resume.pdf'
        ], capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout
    except Exception as e:
        print(f"mdls failed: {e}")
    return None

def extract_basic_info_from_raw():
    """Extract basic information from the raw PDF text we have"""
    info = {
        'email': 'afgarabote@gmail.com',
        'linkedin': 'linkedin.com/in/afgarabote',
        'projects': [
            'empresas.qubierto.com/encontrar-colaboradores',
            'biselmed.com',
            'cubaviptravel.groupdash.io/',
            'www.uci.cu/universidad/noticias/cara-cara-con-gina'
        ]
    }
    return info

def main():
    print("=== ATTEMPTING BETTER PDF EXTRACTION ===")
    
    # Try pdftotext first
    text = extract_with_pdftotext()
    if text:
        print("SUCCESS: Extracted with pdftotext")
        print(text)
        return
    
    # Try mdls with raw output
    text = extract_with_mdls_content()
    if text:
        print("SUCCESS: Extracted with mdls")
        print(text)
        return
    
    # Fall back to basic info
    print("FALLBACK: Using basic extracted information")
    info = extract_basic_info_from_raw()
    for key, value in info.items():
        print(f"{key}: {value}")

if __name__ == "__main__":
    main()
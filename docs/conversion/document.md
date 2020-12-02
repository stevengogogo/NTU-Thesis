---
title: 文件格式轉換
hide_title: true
---

<div align='center'>
  <h1>[ 文件格式轉換 ]</h1>
</div>

如果你使用 $\LaTeX$ 排版你的論文，但是你的指導教授希望你提供 Word 格式方便他進行批改與修訂；又或者你原本使用 Microsft Office Word 排版你的論文，但是你的指導教授希望你能夠使用 $\LaTeX$ 來編譯完稿，那麼你可以使用以下的方式來進行文件格式的轉換。

## Pandoc 安裝

微軟作業系統下可以用 scoop 或是 Chocolatey 安裝，也可以到官網下載編譯好
的 .msi 安裝文件無腦下一步。其他作業系統就採用常用的套件管理工具進行安裝：

```bash
# mac OS
$ brew install pandoc

# Debian/Ubuntu
$ sudo apt install pandoc

# Arch Linux
$ sudo pacman -S pandoc

# Windows
$ scoop install pandoc
```

## 樸素格式轉換

```bash
# 直接轉換，不在意格式（基本上類似複製下來貼到記事本啦…）
# 格式： pandoc <input.tex> -o <output.docx>
$ pandoc main.tex -o main.docx

# 使用模板，按照範例文件規定格式轉換
# 格式： pandoc <input.tex> --reference-doc=<template.docx> -o <output.docx>
$ pandoc main.tex --reference-doc=template.docx -o main.docx

# 指定 .bib 導入參考文獻
$ pandoc main.tex --bibliography=references.bib
                  --reference-doc=template.docx -o main.docx
```

## 模板格式轉換

```bash
$ pandoc main.tex --bibliography=references.bib
                  --reference-doc=template.docx
                  --filter=pandoc-crossref
                  --pdf-engine=xelatex
                  -o output.docx -w docx
```
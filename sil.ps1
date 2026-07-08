# Bu script, artik kullanilmayan dosyalari siler.
# vincburada klasorunun icinden calistirin: powershell -ExecutionPolicy Bypass -File sil.ps1
$ErrorActionPreference = "SilentlyContinue"

Remove-Item -Path "src\app\(app)\(categories)\(car)\car-categories-map\[[...handle]]\SectionGridHasMap.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(car)\car-categories-map\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(car)\car-categories-map\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(car)\car-categories\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(car)\car-categories\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)\experience-categories-map\[[...handle]]\SectionGridHasMap.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)\experience-categories-map\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)\experience-categories-map\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)\experience-categories\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)\experience-categories\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(flight)\flight-categories\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(flight)\flight-categories\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)\real-estate-categories-map\[[...handle]]\SectionGridHasMap.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)\real-estate-categories-map\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)\real-estate-categories-map\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)\real-estate-categories\[[...handle]]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)\real-estate-categories\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\(home-pages)\car\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(home-pages)\experience\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(home-pages)\real-estate\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(listings)\car-listings\[handle]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(listings)\experience-listings\[handle]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\(listings)\real-estate-listings\[handle]\page.tsx" -Force
Remove-Item -Path "src\app\(app)\home-2\layout.tsx" -Force
Remove-Item -Path "src\app\(app)\home-2\page.tsx" -Force
Remove-Item -Path "src\app\customize-control.tsx" -Force
Remove-Item -Path "src\components\Header\CategoriesDropdown.tsx" -Force
Remove-Item -Path "src\components\Header\CurrLangDropdown.tsx" -Force
Remove-Item -Path "src\components\Header\Header2.tsx" -Force
Remove-Item -Path "src\components\Header\MegaMenuPopover.tsx" -Force

# Bos kalan klasorleri temizle
Remove-Item -Path "src\app\(app)\(categories)\(car)" -Recurse -Force
Remove-Item -Path "src\app\(app)\(categories)\(experience)" -Recurse -Force
Remove-Item -Path "src\app\(app)\(categories)\(flight)" -Recurse -Force
Remove-Item -Path "src\app\(app)\(categories)\(real-estate)" -Recurse -Force
Remove-Item -Path "src\app\(app)\(home-pages)\car" -Recurse -Force
Remove-Item -Path "src\app\(app)\(home-pages)\experience" -Recurse -Force
Remove-Item -Path "src\app\(app)\(home-pages)\real-estate" -Recurse -Force
Remove-Item -Path "src\app\(app)\(listings)\car-listings" -Recurse -Force
Remove-Item -Path "src\app\(app)\(listings)\experience-listings" -Recurse -Force
Remove-Item -Path "src\app\(app)\(listings)\real-estate-listings" -Recurse -Force
Remove-Item -Path "src\app\(app)\home-2" -Recurse -Force
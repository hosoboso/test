# dart-sass関係のメモ
https://github.com/sass/dart-sass

フォルダで右クリック→ターミナルで開く でPowerShell呼び出すのが素人には楽。

## scss→cssコンパイル

```PowerShell
sass example.scss output.css
```

output.css.mapが必要ない場合は、

```PowerShell
sass --no-source-map example.scss output.css
```

## フォルダ内のcssファイル内の改行をすべてCRLFに変更するPowerShellスクリプト

sassコマンド後のcssの改行コードがLFになるので。

```PowerShell
ls -r -file -filter *.css | % { (get-content -encoding UTF8 $_.FullName) -join "`r`n" | set-content -encoding UTF8 $_.FullName }
```

## cssファイル内インデントを半角スペース2つ→[tab]に置換するPowerShellスクリプト

sassコマンドでcssのインデントが指定できるんだかどうなのかわからないので。  
半角スペース2つを4つにしたいなら、"`t"を"    "に。

```PowerShell
$TARGET = "output.css"
(get-content $TARGET -encoding UTF8) | foreach { $_ -replace "  ","`t" } |  set-content $TARGET -encoding UTF8
```

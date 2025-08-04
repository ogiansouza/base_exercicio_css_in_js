# checkStyled.ps1
# Execute na raiz do projeto: powershell -ExecutionPolicy Bypass -File .\checkStyled.ps1

# 1. Verifica existência dos arquivos .styled.ts
$expectedStyled = @(
  'src\components\Cabecalho\Cabecalho.styled.ts',
  'src\components\FormVagas\FormVagas.styled.ts',
  'src\components\Hero\Hero.styled.ts',
  'src\components\Vaga\Vaga.styled.ts',
  'src\containers\ListaVagas\ListaVagas.styled.ts'
)
"`nVerificando .styled.ts:"
foreach($file in $expectedStyled) {
  if(Test-Path $file) { "  [OK]   $file" }
  else            { "  [FAIL] $file (ausente)" }
}

# 2. Verifica existência dos arquivos .tsx de componente
$expectedTsx = @(
  'src\components\Cabecalho\Cabecalho.tsx',
  'src\components\FormVagas\FormVagas.tsx',
  'src\components\Hero\Hero.tsx',
  'src\components\Vaga\Vaga.tsx',
  'src\containers\ListaVagas\ListaVagas.tsx'
)
"`nVerificando .tsx:"
foreach($file in $expectedTsx) {
  if(Test-Path $file) { "  [OK]   $file" }
  else            { "  [FAIL] $file (ausente)" }
}

# 3. Verifica importação e uso dos styled components em cada .tsx
$components = @{
  'CabecalhoContainer'  = 'src\components\Cabecalho\Cabecalho.tsx';
  'FormVagasContainer'  = 'src\components\FormVagas\FormVagas.tsx';
  'HeroContainer'       = 'src\components\Hero\Hero.tsx';
  'VagaContainer'       = 'src\components\Vaga\Vaga.tsx';
  'VagasContainer'      = 'src\containers\ListaVagas\ListaVagas.tsx';
}
"`nVerificando import & uso dos styled:"
foreach($name in $components.Keys) {
  $path = $components[$name]
  $match = Select-String -Path $path -Pattern $name -SimpleMatch -Quiet
  if($match) { "  [OK]   $name em $path" }
  else       { "  [FAIL] $name não encontrado em $path" }
}

# 4. Garante que não há import de CSS puro
"`nProcurando imports de .css:"
$css = Select-String -Path 'src\**\*.ts','src\**\*.tsx' -Pattern 'import .*\.css' 
if($css) {
  "  [FAIL] Encontrados imports de CSS:"
  $css | ForEach-Object { "    $_" }
} else {
  "  [OK]   Não há imports de .css"
}
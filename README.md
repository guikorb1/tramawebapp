## 🏁 Getting Started

> Siga este passo a passo para clonar e executar o projeto **Trama** (Ionic + React) no Android Studio.
Para logar no aplicativo demo qualquer senha e user vai passar

### Passo a passo completo

```bash
# 1️⃣ Clona o projeto do GitHub para sua máquina
git clone https://github.com/guikorb1/tramawebapp.git

# 2️⃣ Entra na pasta do projeto
cd tramawebapp

# 3️⃣ Instala todas as dependências listadas no package.json
npm install

# 4️⃣ (Opcional) Teste rápido no navegador para verificar se o app funciona
ionic serve

# 5️⃣ Gera a versão compilada do projeto
ionic build

# 6️⃣ Sincroniza o projeto web com a plataforma Android
npx cap sync android

# 7️⃣ Abre o projeto diretamente no Android Studio
npx cap open android

#### Criando um projeto Ionic do zero e comandos adicionais vistos em aula

# Instala o Ionic CLI globalmente
npm install -g @ionic/cli

# Cria um novo projeto chamado 'myApp' com template 'tabs' usando React
ionic start myApp tabs --type react

# Entra na pasta do projeto
cd myApp

# Gera o build web
npm run build

# Adiciona plataforma Android
npx cap add android

# (Opcional) Adiciona plataforma iOS
npx cap add ios

# Copia os arquivos web build para as plataformas
npx cap copy

# Sincroniza dependências e plugins nativos
npx cap sync

# Abre o projeto no Android Studio (ou Xcode, se iOS)
npx cap open android   # ou npx cap open ios

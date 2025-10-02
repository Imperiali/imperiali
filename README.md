<div align="center">

# 👨‍💻 Igor Imperiali

### Software Engineer Specialist | Full-Stack Developer

**[🇧🇷 Português](README.md)** | **[🇺🇸 English](README_EN.md)**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://imperiali.github.io/imperiali/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/igor-imperiali)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Imperiali)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:igor.imperiali@gmail.com)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Imperiali&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=Imperiali&theme=tokyonight&hide_border=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Imperiali&layout=compact&theme=tokyonight&hide_border=true)

</div>

---

## 🚀 Sobre o Projeto

Portfólio pessoal moderno e responsivo desenvolvido com as mais recentes tecnologias web. Apresenta experiência profissional, habilidades técnicas, projetos e recomendações de forma elegante e interativa.

### ✨ Features

- 🌐 **Multilíngue** - Suporte completo para Português e Inglês
- 🌙 **Dark Mode** - Tema escuro/claro com persistência
- 📱 **Responsivo** - Design adaptativo para todos os dispositivos
- ⚡ **Performance** - Site estático ultra-rápido
- 🎨 **Animações** - Transições suaves e modernas
- 📧 **Formulário de Contato** - Integração com EmailJS
- 🎠 **Carrossel de Recomendações** - Com autoplay e navegação
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica

## 🛠️ Tech Stack

### Frontend

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Tools & Services
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-0072C6?style=for-the-badge&logo=minutemailer&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+ instalado
- Conta no EmailJS (opcional, para formulário de contato)

### Instalação

```bash
git clone https://github.com/Imperiali/imperiali.git
cd imperiali
npm install
```

### Configuração de Ambiente

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Configure suas credenciais EmailJS no `.env`:
```env
PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
PUBLIC_EMAILJS_AUTOREPLY_ID=seu_autoreply_id
PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Desenvolvimento

```bash
npm run dev
```

Acesse em `http://localhost:5173`

### Build

```bash
npm run build
npm run preview
```
igor-portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte      # Página principal
│   │   ├── +layout.svelte    # Layout base
│   │   └── +layout.js        # Configuração de pré-render
│   ├── app.css               # Estilos globais com Tailwind
│   └── app.html              # Template HTML base
├── static/                   # Arquivos estáticos
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Adaptado para todos os dispositivos
- **Performance**: Site estático ultra-rápido
- **SEO**: Meta tags otimizadas
- **Acessibilidade**: Navegação e semântica adequadas
- **i18n**: Suporte multilíngue (Português e Inglês) com troca dinâmica
- **Carrossel de Recomendações**: Navegação interativa com autoplay e controles
- **Seção de Projetos**: Design minimalista com ícones SVG grandes, tech stack e links
- **Formulário de Contato**: Integração com EmailJS para receber mensagens diretamente

## 📝 Customização

### Cores

As cores principais podem ser ajustadas em `tailwind.config.js`:

```js
colors: {
  primary: { ... }
}
```

### Conteúdo e Traduções

As traduções estão em `src/lib/i18n/translations/`:
- `pt.js` - Português
- `en.js` - Inglês

Para adicionar um novo idioma:
1. Crie um novo arquivo em `src/lib/i18n/translations/`
2. Adicione-o ao `index.js`
3. Adicione a bandeira no componente `LanguageSwitcher.svelte`

O idioma selecionado é salvo no `localStorage` do navegador.

### Projetos

A seção de projetos usa um design minimalista com ícones SVG grandes ao fundo.

Para editar os projetos:
1. Abra `src/lib/i18n/translations/pt.js` e `en.js`
2. Edite a seção `projects.items`
3. Escolha um ícone disponível: `search`, `weather`, `location`, `shopping`, `vue`, `flutter`
4. Para adicionar novos ícones, edite `src/lib/components/ProjectIcons.svelte`

### Formulário de Contato

O formulário usa EmailJS para enviar emails. Para configurar:

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie **2 templates**:
   - 1 template principal (você recebe o contato)
   - 1 auto-reply bilíngue (resposta automática para usuário)
4. Obtenha as credenciais (Service ID, Template IDs, Public Key)
5. Crie um arquivo `.env` na raiz do projeto (copie de `.env.example`)
6. Adicione suas credenciais no arquivo `.env`:
   ```env
   PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
   PUBLIC_EMAILJS_TEMPLATE_ID=template_principal
   PUBLIC_EMAILJS_AUTOREPLY_ID=autoreply
   PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
   ```
7. Veja templates prontos em `EMAIL_TEMPLATES.md` e instruções em `EMAILJS_SETUP.md`

**Nota**: O projeto funciona sem configuração, mas os emails não serão enviados até que você configure o EmailJS.

## 🌐 Deploy no GitHub Pages

O projeto está configurado com GitHub Actions para deploy automático.

### Configuração Inicial

1. **Fork/Clone** este repositório

2. **Configure o GitHub Pages:**
   - Vá em `Settings` → `Pages`
   - Em **Source**, selecione `GitHub Actions`

3. **Adicione as Secrets:**
   - Vá em `Settings` → `Secrets and variables` → `Actions`
   - Adicione as seguintes secrets:
     - `PUBLIC_EMAILJS_SERVICE_ID`
     - `PUBLIC_EMAILJS_TEMPLATE_ID`
     - `PUBLIC_EMAILJS_AUTOREPLY_ID`
     - `PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Configure o Base Path:**
   - Abra `svelte.config.js`
   - Altere o `base` para o nome do seu repositório:
   ```js
   paths: {
     base: process.env.NODE_ENV === 'production' ? '/nome-do-seu-repo' : ''
   }
   ```

5. **Push para Main:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

6. **Aguarde o Deploy:**
   - O GitHub Actions irá buildar e fazer deploy automaticamente
   - Acesse em: `https://Imperiali.github.io/imperiali/`

### Deploy Manual (Outras Plataformas)

O projeto também pode ser hospedado em:

- **Vercel** - `npm install -g vercel && vercel`
- **Netlify** - Arraste a pasta `build/` no dashboard
- **Cloudflare Pages** - Conecte o repositório no dashboard

## 📊 GitHub Stats

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=Imperiali&color=blueviolet&style=for-the-badge)

[![GitHub followers](https://img.shields.io/github/followers/Imperiali?style=for-the-badge&logo=github)](https://github.com/Imperiali?tab=followers)
[![GitHub stars](https://img.shields.io/github/stars/Imperiali?style=for-the-badge&logo=github)](https://github.com/Imperiali?tab=repositories)

</div>

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a [MIT License](LICENSE).

## 📧 Contato

**Igor Imperiali**

- 💼 LinkedIn: [igor-imperiali](https://linkedin.com/in/igor-imperiali)
- 📧 Email: igor.imperiali@gmail.com
- 🌐 Portfolio: [imperiali.github.io/imperiali](https://imperiali.github.io/imperiali)

---

<div align="center">

### 💜 Desenvolvido com SvelteKit

Se este projeto te ajudou, considere dar uma ⭐!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)

</div>

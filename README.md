# Igor Imperiali - Portfolio Pessoal

Portfolio profissional desenvolvido com SvelteKit e TailwindCSS.

## 🚀 Tecnologias

- **SvelteKit** - Framework moderno e leve
- **TailwindCSS** - Estilização utilitária
- **Vite** - Build tool rápido

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

Acesse em `http://localhost:5173`

## 🏗️ Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

## 📁 Estrutura

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

## 🌐 Deploy

O projeto está configurado para export estático e pode ser hospedado em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Deploy na Vercel

```bash
npm install -g vercel
vercel
```

### Deploy no Netlify

```bash
npm run build
```

Faça upload da pasta `build/` no Netlify.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do LinkedIn ou email no próprio site.

---

Desenvolvido com ❤️ usando SvelteKit

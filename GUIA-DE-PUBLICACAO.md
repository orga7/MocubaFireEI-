# Guia Rápido de Publicação — Website Mocuba Fire E.I.

Este guia explica, de forma simples, como colocar o website online. Escolha **apenas uma** das opções abaixo.

---

## 0. Antes de começar (importante)

O website é composto por vários ficheiros que têm de ser publicados **juntos e com a mesma estrutura**:

```
mocuba-fire/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── logo-trim.jpeg
    ├── logo.jpeg
    ├── extintores-1.jpeg
    └── extintores-2.jpeg
```

> ⚠️ **Regra de ouro:** a pasta `assets/` (com todas as imagens) tem de ir sempre junto do `index.html`.
> Se enviar só o `index.html`, o logótipo e as fotos **não aparecem**.

1. Descompacte o ficheiro `mocuba-fire-website.zip`.
2. Vai obter a pasta `mocuba-fire`. É o conteúdo **dentro dela** que vai publicar.

---

## Opção A — Alojamento com cPanel / Gestor de Ficheiros (o mais comum em Moçambique)

Ideal se comprou alojamento + domínio (ex.: `.co.mz`, `.com`) numa empresa de hosting.

1. Entre no **cPanel** do seu alojamento.
2. Abra **"Gestor de Ficheiros" (File Manager)**.
3. Entre na pasta **`public_html`** (é a pasta pública do seu site).
4. Clique em **"Carregar" (Upload)** e envie **todos** os ficheiros e a pasta `assets`.
   - Dica: no seu computador, selecione o `index.html`, `styles.css`, `script.js` e a pasta `assets`, comprima num `.zip`, carregue esse `.zip` e depois use **"Extract"** dentro do `public_html`.
5. Confirme que dentro de `public_html` fica assim:
   `public_html/index.html`, `public_html/styles.css`, `public_html/assets/...`
6. Abra o seu domínio no navegador. O site deve aparecer.

---

## Opção B — Netlify (grátis, sem servidor, o mais fácil)

Ótimo para publicar rápido e de graça, com um endereço tipo `mocubafire.netlify.app`.

1. Aceda a **https://app.netlify.com/drop**
2. Arraste a **pasta `mocuba-fire` inteira** para a área indicada.
3. Em segundos recebe um link público já funcional.
4. (Opcional) Em **Site settings → Domain**, pode ligar o seu domínio próprio.

---

## Opção C — Vercel (grátis, semelhante ao Netlify)

1. Crie conta em **https://vercel.com**
2. **Add New → Project** e faça upload/importação da pasta.
3. Clique em **Deploy**. Recebe um link tipo `mocubafire.vercel.app`.

---

## Opção D — GitHub Pages (grátis, requer conta GitHub)

1. Crie um repositório novo em **https://github.com**
2. Envie todos os ficheiros (incluindo a pasta `assets`) para o repositório.
3. Vá a **Settings → Pages → Branch: main / root → Save**.
4. O site fica em `https://oseuutilizador.github.io/nome-do-repositorio/`

---

## Ligar o seu domínio próprio (ex.: www.mocubafire.co.mz)

- **cPanel:** o domínio já aponta para `public_html` — nada a fazer.
- **Netlify / Vercel / GitHub Pages:** na secção **Domains/Domain settings**, adicione o domínio e siga as instruções de DNS (normalmente apontar um registo `A` ou `CNAME` no painel onde comprou o domínio).

---

## Resolução de problemas

**O logótipo ou as fotos não aparecem**
- Confirme que a pasta `assets/` foi enviada junto do `index.html`.
- Confirme os nomes dos ficheiros (respeite maiúsculas/minúsculas): `logo-trim.jpeg`.
- Limpe a cache do navegador (Ctrl+F5) e volte a abrir.

**A página abre mas sem cores/estilos**
- Faltou enviar o `styles.css` ou está fora da pasta certa. Tem de estar ao lado do `index.html`.

**Os botões de animação/formulário não funcionam**
- Faltou o `script.js`. Envie-o para a mesma pasta do `index.html`.

**O WhatsApp não abre**
- Precisa de ligação à internet; em computador abre o WhatsApp Web.

---

## Testar antes de publicar

No seu computador, basta fazer duplo clique no `index.html` para abrir no navegador e verificar que tudo aparece (logótipo, fotos, botões). Se funcionar localmente com a pasta `assets` ao lado, funcionará online desde que publique a estrutura completa.

---

**Mocuba Fire E.I.** — Venda e Assistência de Extintores · Mocuba – Zambézia, Moçambique

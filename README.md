# PDM-ATV1

Este repositório contém os três projetos de exercícios do trabalho de **Dispositivos Móveis (PDM) - Atividade 1**. Cada exercício está isolado em sua própria pasta (`Exercicio1`, `Exercicio2` e `Exercicio3`) e utiliza **Expo** com React Native para Android/iOS.

---

## 📋 Visão geral

- **Exercicio1**: formulário simples que pede nome de usuário e mostra um alerta.
- **Exercicio2**: galeria de imagens dentro de um `ScrollView`.
- **Exercicio3**: lista dinâmica de itens onde o usuário pode adicionar elementos.

Cada projeto é independente; você pode executá‑los separadamente.

---

## 🛠️ Pré‑requisitos

Antes de começar, instale os seguintes itens no seu sistema:

1. [Node.js](https://nodejs.org/) (v16+ recomendado)
2. npm ou [Yarn](https://yarnpkg.com/) (o `npm` vem junto com o Node)
3. [Expo CLI](https://expo.dev/) globalmente:
   ```bash
   npm install --global expo-cli
   # ou
   yarn global add expo-cli
   ```
4. Um emulador Android/iOS ou o app Expo Go no seu dispositivo físico.

> ⚠️ Não há nenhum componente nativo personalizado, portanto basta o Expo para rodar.

---

## 🚀 Executando os exercícios

Para cada exercício, navegue até a pasta correspondente e inicie o servidor Expo:

```bash
cd Exercicio1      # ou Exercicio2 / Exercicio3
npm install        # ou yarn
npx expo start     # abre o Metro bundler
```

Em seguida, escaneie o QR code com o Expo Go ou escolha o emulador desejado para ver o app rodando.

Você pode executar múltiplos projetos em terminais diferentes se quiser comparar.

---

## 📁 Estrutura do repositório

```
PDM-ATV1/
├─ Exercicio1/    # app de nome de usuário
├─ Exercicio2/    # galeria de imagens
├─ Exercicio3/    # lista dinâmica de itens
└─ README.md      # este arquivo
```

Cada `ExercicioX` contém seu próprio `package.json`, `tsconfig.json` e assets.

---

## 📌 Descrição dos exercícios

### Exercicio1
- Interface com um `TextInput` para digitar o nome de usuário.
- Botão "Confirmar" exibe um `alert` com o texto inserido.

### Exercicio2
- Mostra várias imagens estáticas armazenadas em `assets/`.
- Envolve as imagens em um `ScrollView` para permitir rolagem vertical.

### Exercicio3
- Campo `TextInput` e botão para adicionar itens a uma lista.
- Os itens adicionados aparecem em uma `ScrollView` abaixo.

---

## 💡 Dicas

- Para resetar o cache do Expo, use `expo start -c`.
- Se quiser transformar em repositório público, apague os diretórios ocultos de `.expo` antes de commitar.

---

## 📝 Licença

Este projeto é meramente acadêmico e não possui licença específica.

---

Qualquer dúvida, entre em contato com **Arthur Steiner**.

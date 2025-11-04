[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/iywZHxi3)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21465559)

# Calculadora ❤️ React Native | GitHub Codespaces

Sejam bem-vindos ao espaço de trabalho com React Native no GitHub Codespaces! Tudo já está configurado para você explorar e aprender com facilidade.

## Calculadora com React Native

O objetivo desta atividade é aprender React Native desenvolvendo uma calculadora simples, utilizando as ferramentas **React Native**, **Expo** e **GitHub Codespaces**. 

Siga os passos da atividade para entender os conceitos em cada etapa. Durante o processo, abordaremos os seguintes tópicos:

1. **Componentes**: Estruturação e reutilização de código. Utilize os componentes do [React Native Paper]([https://reactnativepaper.com/)
2. **Estilização**: Customização de interfaces usando StyleSheet.
3. **Eventos**: Interatividade e manipulação de estados.

## Passos Iniciais

1. **Clone ou inicie o repositório no GitHub Codespaces:**
   - Clique em `Code` -> `Codespaces` e inicie um Codespace a partir do repositório.
   - Certifique-se de estar no seu próprio repositório. Caso contrário, clique no link da atividade no **GitHub Classroom** para fazer o _fork_ automaticamente.

2. **Instale as dependências:**
   No terminal, execute:
   ```bash
   npm install
   npm install -g expo-cli
   ```

3. **Link com seu projeto no Expo:**

   Acesse o [Expo](https://expo.dev/)
   - crie um usuário (se não tiver)
   - crie um projeto
   - guarde o número ID do projeto

   Execute:
   ```bash
   expo login #para se logar na sua conta
   npm install -g eas-cli
   eas init --id NUMEROID #use o ID do projeto criado no expo 
   ```

4. **Inicie o servidor do Expo:**
   Execute:
   ```bash
   npx expo start --tunnel #para iniciar o servidor com tunnel já que estamos usando uma máquina virtual (CodeSpace)
   ```
   Isso abrirá o servidor de desenvolvimento do Expo no terminal. Use o QR code exibido para testar no seu dispositivo físico ou inicie o emulador no seu ambiente de trabalho.

5. **Desenvolva os componentes:**
   Agora vamos criar os componentes de uma calculadora seguindo a interface abaixo:
   [Calculator Design on Dribbble](https://dribbble.com/shots/14709020-Calculator)

6. **Commits e envio das alterações:**
   Ao concluir cada etapa do tutorial, faça um commit para registrar o progresso:
   ```bash
   git status
   git add .
   git commit -m "Mensagem amigável sobre o progresso"
   git push origin main
   ```

## Ferramentas e Recursos Adicionais

- [Documentação do React Native](https://reactnative.dev/)
- [Documentação do Expo](https://docs.expo.dev/)
- [Configuração do GitHub Codespaces](https://docs.github.com/en/codespaces)
- [Doumentação do React Native Paper](https://reactnativepaper.com/)

Explore, aprenda e divirta-se desenvolvendo com React Native! 🌟

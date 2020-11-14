# Meetings app flow chart:

  

```mermaid

graph LR

X[Start] --> A[Meeting details]

A[List meetings] -- Details --> B[Meeting details]

B -- Edit meeting--> C[Rhombus]

A -- Create meeting --> C[Create/Edit meeting]

C -- Created/edited meeting --> A

B -- meeting deleted --> A

C -- Cancel editing --> B

  

```

# Meetings app improvements

  

### Suporte para criação de contas

> Criação de contas para que usuários possam logar e gerenciar suas próprias reuniões.


### Infinite scroll

> Infinite scroll na tela de lista de reuniões.


### Máscaras e validações

> Máscaras nos campos de data e hora bem como validações de datas e horas apropriadas

  
### Upload de imagem

> Permitir que usuário faça upload de imagens para cadastrar na reunião
# Teste de end-point com Cypress

Endereço da página do Teste: assineglobo.com.br/services/rest/products

## 1. Automatização de testes em end-point
De forma automatizada, realizada uma requisição GET (sem header ou nenhum outro parâmetro) no endereço `assineglobo.com.br/services/rest/products` 

Asserts realizados :
  
- Status de retorno da requisição (200)
- Validada as propriedades do Body (ID; titulo ; tituloLongo ; url)
- Validado valores das propriedades do Body (AT ; Casa e Jardim ; Autoridade em decoração e design. ; https://www.assineglobo.com.br/vitrine-paywall?cod_oferta=53873)

![image](https://user-images.githubusercontent.com/37030387/227069916-45f3525d-ee84-4c55-9984-17ad1f5cb4a8.png)



## 2. Execução dos testes no GitHub


- Realizada criação de um workflow de Testes para execução dos testes automatizados em uma máquina virtual


![image](https://user-images.githubusercontent.com/37030387/227077743-3231259a-3774-49ce-a278-3c71782a3632.png)


## 3. Procedimento para Execução do Teste diretamente no GitHub

1° - Acessar a página https://github.com/Eduh06/Testes-de-API-com-Cypress <br><br>

2° - Clicar em Actions conforme imagem abaixo: <br><br>
![image](https://user-images.githubusercontent.com/37030387/227379815-c2a17482-c32d-41bc-b08d-ef03d56bfd9f.png) <br><br>

3° - Clicar no teste para execução conforme imagem abaixo: <br>

![image](https://user-images.githubusercontent.com/37030387/227381413-859f8175-3ab9-49dd-87eb-05848ccc14fc.png) <br><br>


4° - Clicar em Run Workflow para dar inicio a execução do teste <br>

![image](https://user-images.githubusercontent.com/37030387/227382077-4d61b4d4-c265-445d-a408-44b1db1a42aa.png)<br><br>


5° - Seguindo os passos anteriores o teste será iniciado. <br>


![image](https://user-images.githubusercontent.com/37030387/227382432-795c20b2-c280-42f1-ad3a-cb6689742ded.png) <br><br>

6° - Abrindo o teste em execução, é possivel acompanhar o passo a passo da execução. <br>


![image](https://user-images.githubusercontent.com/37030387/227382807-9ab30bff-140c-44cf-bda0-0b6ae4759cc1.png)




# Autor

 [<img src="https://avatars.githubusercontent.com/u/37030387?s=400&u=fcf5e6893710bee598bead4310834965df74a88a&v=4" width=115><br><sub>Eduardo dos Santos</sub>](https://github.com/Eduh06)

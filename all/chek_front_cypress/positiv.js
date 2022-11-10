import * as datas from './data1.js';
require('cypress-xpath')

  describe("Form test", () => {
    context('1080 resolution', () => {
   //проверка работоспособности системы
      //создание задачи с датой
    it("Positive. New task. All", () => {
      cy.visit(datas.url);
      cy.new_task();
      cy.reload()
      //создание задачи без даты
      cy.new_task_with_data();
      cy.reload()
    
    });
    //удаление созданной задачи без даты
    it("Positive. New task. Delete", () => {
        cy.new_task();
        cy.get('[class="btn btn-danger btn-sm anim-btn"]')
        .should('exist')
        .click() 
        cy.reload()
        cy.wait(100)
        cy.new_task_with_data();
    //удаление задачи с датой  
        cy.get('[class="btn btn-danger btn-sm anim-btn"]')
        .should('exist')
        .click() 
        cy.reload()
   
  
    });
    //выполнение задачи с датой 
    it("Positive. New task. Done", () => {
        cy.new_task();
        cy.get('[class="btn btn-success btn-sm anim-btn"]')
        .should('exist')
        .click() 
        cy.reload()
        
        cy.new_task_with_data();
    //выполнение задачи без даты  
        cy.get('[class="btn btn-success btn-sm anim-btn"]')
        .should('exist')
        .click() 
        cy.reload()
    });
    //проверка валидации поля Задача
      //ввод датиницы
    it("Task validation", () => {
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.latin)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click()   
      //ввод кирилицы
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.kiril)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 
      //ввод цифр 
          cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.num)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 
      //ввод латиницы + цифр
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.lat_num)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 

        //ввод кирилицы + цифр
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.kir_num)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 

        //ввод цифр + латиницы
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.num_lat)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 

        //ввод цифр + кирилицы
        cy.get('input[id="newTask"]')
        .should('exist')
        .type(datas.num_kir)   
        cy.get('[class="btn btn-primary btn-sm mt-2"]')
        .should('exist')
        .click() 
          
      
        cy.reload()
    });

    //изменение имени уже существующей задачи
    it("Positive. Change name", () => {
        cy.new_task();
        cy.change_name();

        cy.reload()
    });

    //изменение даты у задачи с датой
    it("Positive. Change data. Exist", () => {
        cy.new_task_with_data();
        cy.change_data();
        cy.reload()
  
    });

    //изменение даты у задачи без даты
    it("Positive. Change data", () => {
        cy.new_task();
        cy.change_data();
        cy.reload()
  
    });

    //проверка пагинации, создание 13 задач, 3 страницы
    it("Pagination. Type number", () => {
        cy.pagination_3_pages()
    //переход на 3 страницу, проверка количества задач на странице
        cy.xpath ('/html/body/div[1]/div[2]/div/div[2]/div/div/div/input').type ('3')
        cy.get('[class="btn btn-primary btn-sm ms-1"]').click()
        cy.wait(100)
        cy.get('[class="list-group-item single-task"]').should('have.length', 3)
        cy.log('page 3')
        cy.reload()
    });

    //переход по страницам (3 страницы)
    it("Pagination. Amount", () => {
        cy.pagination_3_pages();
        cy.xpath ('/html/body/div/div[2]/div/div[2]/div/nav/ul/li[3]/a').click()

        cy.wait(100)
        cy.get('[class="list-group-item single-task"]').should('have.length', 5)
        cy.log('page 2')

        cy.xpath ('/html/body/div/div[2]/div/div[2]/div/nav/ul/li[4]/a').click()
        cy.get('[class="list-group-item single-task"]').should('have.length', 3)
        cy.log('page 3')
        cy.wait(100)
        cy.xpath('/html/body/div/div[2]/div/div[2]/div/nav/ul/li[2]/a').click()
        cy.get('[class="list-group-item single-task"]').should('have.length', 5)
        cy.log('page 1')
        cy.reload()
    });     
    
    //создание 3 страниц, сокразение страниц до 1  
    it("Pagination. To one page", () => {
        cy.pagination_3_pages()
        cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
          const task1 = text.trim()
          const task1_true1 = "В работе (13) :";
          cy.log(task1);
          if (task1===task1_true1)
          {console.log ('good 13')}
          else {console.log ('bad')}
    })
    
     
              cy.xpath('/html/body/div/div[2]/div/div[3]/h2'). invoke('text').then(text => {
                const done1 = text.trim()
                const done1_true1 = "В работе (5) :";
                cy.log(done1);
                if (done1===done1_true1)
                {console.log ('good 5')}
                else {console.log ('bad')}
              });
            for (let i = 0; i < 8; i++) { 
            cy.xpath (' /html/body/div/div[2]/div/div[2]/ul/li[1]/div[3]/button[3]').click()
            cy.get('[class="list-group-item single-task"]').should('have.length', 5)
            cy.log('page=1', 'lenght = 5')
            
            
        };
            cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
              const task1 = text.trim()
              const task1_true1 = "Выполненые (8):";
              cy.log(task1);
              if (task1===task1_true1)
              {console.log ('good 5')}
              else {console.log ('bad')}
            
          })
      })
 
    })
  })
      

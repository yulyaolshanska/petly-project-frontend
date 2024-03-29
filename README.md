<div style=" color: black; padding:20px; background-color: #ede9e5">

<h1 style="text-align: center;  background-color: #ede9e5 ">Pe<span style=" color: #F59256">t</span>ly - Take good care of 
your small pets</h1>

![](src/img/auth-forms-bg-desctop.svg)

</div>

https://team-project-petly.netlify.app/

## **Опис**

**Petly** - додаток, який допомагає піклуватися про своїх маленьких вихованців. У ньому ви зможете
зберігати інформацію про своїх улюбленців, переглядати список тварин, яких можна придбати, або
шукати новини, пов'язані з життям братів наших менших.

---

## **Зміст та структура проекту:**

Проект виконаний за допомогою **_react.js_** та **_node.js_** для мобільної, планшетної та пк
версій. Він складається з:

- **Header** - шапка додатку,
- **RegisterPage** - сторінка реєстрації,
- **LoginPage** - сторінка входу,
- **OurFriendsPage** - сторінка списку партнерів,
- **NewsPage** - сторінка новин,
- **NoticesPage** - сторінка оголошень,
- **UserPage** - сторінка користувача.

### **1. Header**

Компонент рендерить:

- **_Logo_** - перенаправляє на сторінку **_home_**
- **_Navigation_** з компонентами:
  - **_Nav_** - загальна навігація
  - **_UserNav_** - навігація для АВТОРИЗОВАНОГО користувача
  - **_AuthNav_** - навігація для НЕАВТОРИЗОВАНОГО користувача

На планшетній і мобільній версіях компонент **_Nav_**, **_UserNav_**, **_AuthNav_** відображаються в
бургер меню. Логотип додатку переносить користувача в неймовірний світ сторінки **_Home_** .

### **2. RegisterPage** | маршрут - **/_register_**

- **_AuthForm_** - форма реєстрації користувача

Сторінка реєстрації містить в собі компонент **_AuthForm_**, яка містить форму з першою частиною
полів форми та кнопкою _Next_ і елементом навігації Login.

- кнопка _Next_ - відображає в формі наступну частину полей форми, а також кнопки _Register_ та
  _Back_
- кнопка _Back_ - повертає користувача на попередні поля форми
- кнопка _Register_ - реєструє користувача
- елемент навігації _Login_ - переадресовує користувача на сторінку **LoginPage**.

Всі поля форми валідуються і виводять користувачу відповідну інформацію в випадку, якщо введене
значення не валідне. Після реєстрації користувач повинен бути переадресований на сторінку
**UserPage**.

### **3. LoginPage** | маршрут - **/_login_**

- **_AuthForm_** - форма входу користувача

Сторінка логінізації містить в собі компонент **_AuthForm_**, яка містить в собі форму з полями
логінізації та кнопкою _Login_ і елементом навігації _Register_.

- кнопка _Login_ - авторизує користувача
- елемент навігації _Register_ - переадресовує користувача на сторінку **RegisterPage**.

Всі поля форми валідуються і виводять користувачу відповідну інформацію в випадку, якщо введене
значення не валідне. Після рееєстрації користувач бубе переадресований на сторінку **UserPage**.

### **4. OurFriendsPage** | маршрут - **/_friends_**

Сторінка отримує дані з бекенда і відображає список контактної інформації про партнерів. Клік по
елементу з робочими годинами відкриває вікно з переліком робочих годин.

### **5. NewsPage** | маршрут - **/_news_**

Сторінка містить:

- поле для пошуку новини по ключовому слову
- список новин, які отримує з бекенда.

Клік по лінку _ReadMore_ на карточці з новиною переадресовує користувача на ресурс з новиною на
окремій вкладці браузера.

### **6. NoticesPage** | маршрут - **\_/notices**

Під час першого входу на сторінку рендериться список оголошень з продажу. Сторінка містить
компоненти:

- **_NoticesSearch_** - форму пошуку. Містить поле для пошуку(фільтрації) оголошення в категорії по
  вмісту ключового слова в заголовку оголошення
- **_NoticesCategoriesNav_** - блок навігації. Компонент рендерить блок навіції з маршрутами:

  - **_/notices/sell_** - відкриває на сторінці компонент **_NoticesCategoryList_** зі списком
    оголошеннь з продажу
  - **_/notices/lost_found_** - відкриває на сторінці компонент **_NoticesCategoryList_** зі списком
    оголошеннь з знайшов/шукаю
  - **_/notices/in_good_hands_** - відкриває на сторінці компонент **_NoticesCategoryList_** зі
    списком оголошеннь з віддам в добрі руки.

  АВТОРИЗОВАНИЙ користувач: Компонент рендерить блок навігації з маршрутами:

  - **_/notices/favorite_** - відкриває на сторінці компонент **_NoticesCategoryList_** зі списком
    оголошеннь доданих до обраних
  - **_/notices/own_** - відкриває на сторінці компонент **_NoticesCategoryList_** зі списком
    оголошеннь створених користувачем

- **_NoticesCategoriesList_** - список оголошень. Рендерить список всіх оголошень відповідної
  категорії - **_NoticeCategoryItem_**, данні по яким отримує з бекенду

  - **_NoticeCategoryItem_** - Містить елемент списку оголошень, карточку одного оголошення з
    кнопками _AddToFavorite_, _LearnMore_. Клік по кнопці:
    - _AddToFavorite_:
      - якщо користувач АВТОРИЗОВАНИЙ - додає оголошення в обрані, або показує кнопку для видалення
        з обраних, якщо таке повідомлення там вже збережене,
      - якщо користувач НЕАВТОРИЗОВАНИЙ, виводить повідомлення типу нотіфікація з інфо, про те що
        потрібно авторизуватися для використання даного функціоналу
    - _LearnMore_ - відкриває користувачу модалку з детальним описом даного оголошення -
      **_NoticeModal_**.
  - **_NoticeModal_** - Компонент рендерить модалку з повним описом відповідного оголошення та
    кнопками _AddToFaforite_, _Contact_

    - _AddToFavorite_
    - _Contact_ - при натисканні переадресовує користувача на мобільний пристрій для виконання
      телефонного дзвінка по номеру користувача, що створив оголошення. Модалка закривається по
      кліку на кнопку закриття модалки, клік по бекдропу, а також клік по Escape.

    АВТОРИЗОВАНИЙ користувач: Компонент рендерить кнопку для видалення оголошення, якщо дане
    оголошення створене цим користувачем. Клік по кнопці видаляє оголошення.

- **_AddNoticeButton_** - Рендерить кнопку для:

  - АВТОРИЗОВАНОГО користувача клік по кнопці відкриває компонент **AddNoticeModal**.

    - **AddNoticeModal** рендерить модалку для створення нового оголошення з першою частиною полів
      форми та кнопками _Next_ і _Canсel_.

      - _Next_ - відображає в формі наступну частину полей форми, а також кнопки _Done_ та _Back_
      - Back - повертає користувача на попередні поля форми
      - _Done_ - виконує сабміт форми

      Всі поля форми обов'язкові до заповнення

  - НЕАВТОРИЗОВАНОГО користувача клік по кнопці виводить повідомлення типу нотіфікація з інфо про
    те, що потрібно авторизуватися для використання даного функціоналу.

### **7. UserPage** | маршрут - **_/user_**

Компонент рендерить сторінку з компонентами

- **_UserData_** - Компонент рендерить контактну інформацію користувача в полях **_UserDataItem_** з
  можливістю редагувати дані в полях
  - **_UserDataItem_** - Рендерить елемент, який виводить дані користувача, а також кнопку для
    редагування цих даних.
- **_Logout_** - Компонент рендерить кнопку для виходу користувача з облікового запиту
- **_PetsData_** - Компонент рендерить кнопку для додавання карточки з твариною та список
  відповідних карточок - **_PetsList_** Клік по кнопці відкриває модалку з формою для створення
  карточки тварини - **_ModalAddsPet_**
  - **_PetsList_** - Компонент рендерить карточки з описом тварини. Карточка має кнопку для
    видалення.
  - **_ModalAddsPet_** - Компонент рендерить модалку з формою для створення картки з даними про
    тварину користувача. Всі поля для вводу обов'язкові для заповнення

---

## **Налаштування проекту**

```
npm install
npm start
```

---

## **Маршрутизація**

- **_/news_** - публічний-необмежений, переадресує на сторінку **_NewsPage_**,
- **_/notices_** - публічний-необмежений, переадресує на сторінку **_NoticesPage_**
- **_/friends_** - публічний-необмежений, переадресує на сторінку **_OurFriendsPage_**
- **_/register_** - публічний-обмежений, переадресує на сторінку **_RegisterPage_**
- **_/login_** - публічний-обмежений, переадресує на сторінку **_LoginPage_**
- **_/user_** - приватний, переадресує на сторінку **_UserPage_**

---

## **Backend-розробка**

[Petly-backend](https://github.com/yulyaolshanska/petly-backend)

```

https://petly-backend-production.up.railway.app/auth/signup     post - реєстрація користувача (потребує  password, email- обов'язкові,  name, city, phone, birthday), потребує передачу даних для оновлення за допомогою body/raw/JSON {name,email, }

https://petly-backend-production.up.railway.app/auth/login      post - логінізація користувача (потрубує email, password), потребує передачу даних для оновлення за допомогою body/raw/JSON {name,email, }

https://petly-backend-production.up.railway.app/auth/logout     get -  вихід з аккаунту зареєстрованого юзера

https://petly-backend-production.up.railway.app/auth/current    get  - віддає данні користувача при вже наявному токені

----------------------------------------------------------------------------------------------

https://petly-backend-production.up.railway.app/friends  -      get -  всі дані з друзями /доступна пагінація (default {page = 1, limit = 10})

----------------------------------------------------------------------------------------------

https://petly-backend-production.up.railway.app/news -          get - всі дані з новинами /доступна пагінація (default {page = 1, limit = 10})

----------------------------------------------------------------------------------------------

https://petly-backend-production.up.railway.app/notices            get  - всі оголошення / доступна пагінація (default (page = 1, per_page = 15))/ (обрати за категорією з доступних: ["sell", "lost_found", "in_good_hands"], за допомогою params)

https://petly-backend-production.up.railway.app/notices/:id        get  - детальна інформація по оголошенню

https://petly-backend-production.up.railway.app/notices/:category  post -  додавання оголошення (потребує name,title,birthday,breed,male,location,comments - обов'язково, price, avatar, category ), потребує передачу даних за допомогою body/form-data/text (key=name,key=title, ...) body/form-data/file key=avatar; обрати за категорією з доступних: ["sell", "lost_found", "in_good_hands"] query (notices?category=in_good_hands);

https://petly-backend-production.up.railway.app/notices/:id        delete - видалення оголошення за його id

-----------------------------------------------------------------------------------------

https://petly-backend-production.up.railway.app/user                  GET /user - віддає данні про користувача, включно з домашніми улюбленцями, при наявності токену;

https://petly-backend-production.up.railway.app/user/pets             POST /user/pets - додає юзеру домашнього улюбленця, наявніть токену (потребує name - обов'язково, birthday, breed, comments)), потребує передачу даних за допомогою body/raw/JSON {name,breed, };

 https://petly-backend-production.up.railway.app/user/pets/:petsId    DELETE /user/pets/:petsId - видаляє домашнього улюбленця по його id, наявність токену;

https://petly-backend-production.up.railway.app/user/avatar           PATCH /user/avatar - оновлення аватара юзера, наявність токену), потребує передачу даних за допомогою body/form-data/file key=avatar;

https://petly-backend-production.up.railway.app/user/:properties      PATCH /user/:properties - оновлює одне поле з інформацією про юзера(одне з name, email, birthday, city, phone), окрім аватара, properties - поле яке треба оновити, потребує передачу даних для оновлення у params  ;


```

якщо не знайшов потрібної інформації по функціоналу спробуй почитати, те що розміщено нижче:

```
--https://petly-backend-production.up.railway.app


POST /auth/signup - реєстрація користувача (потребує  password, email, name - обов'язкові, city, phone, birthday)
POST /auth/login - логінізація користувача (потребує email, password)
GET /auth/logout - логаут
GET /auth/current - віддає данні користувача при вже наявному токені

/======== Данні про юзера ================/
GET /user - віддає данні про користувача, включно з домашніми улюбленцями, при наявності токену;
GET /user/notice - віддає оголошення створені користувачем
PATCH /user/avatar - оновлення аватара юзера, наявність токену);
PATCH /user/:properties - оновлює одне поле з інформацією про юзера(одне з name, email, birthday, city, phone), окрім аватара, properties - поле яке треба оновити, потребує передачу даних для оновлення

/======== Данні про цуцика юзера =======/

POST /user/pets - додає юзеру домашнього улюбленця, наявніть токену (потребує name - обов'язково, birthday, breed, comments));
DELETE /user/pets/:petsId - видляє домашнього улюбленця по його id, наявність токену;

/========  Дані по друзях ===============/

 GET /friends  -   всі дані з друзями /доступна пагінація (default {page = 1, limit = 10})

/========  Дані по новинах ===============/

GET  /news -     get - всі дані з новинами /доступна пагінація (default {page = 1, limit = 10})

/====== Робота з оголошеннями=======/

GET /notices - всі оголошення / доступна пагінація (default (page = 1, per_page = 15))/ (обрати за категорією з доступних: ["sell", "lost_found", "in_good_hands"], за допомогою req.query (params at the postman SET))
GET /notices/:id  - детальна інформація по оголошенню(потребує id оголошення)
POST /notices  -  додавання оголошення (потребує name,title,birthday,breed,male,location,comments - обов'язково, price, avatar, category ), потребує передачу даних за допомогою body/form-data/text (key=name,key=title, ...); body/form-data/file key=avatar; query (notices?category=in_good_hands)
DELETE /notices/:id - видалення оголошення за його id

/======== Робота з favorite оголошеннями =======|

GET /user/favorite - віддає улюблені оголошення користувача
DELETE /user/favorite - видаляє оголошення з улюблених у користувача (потребує notice_id оголошення в query) (приклад // url/user/favorite?notice_id=6372bb9b6b1a551c201218ef)
POST /user/favorite - додає оголошення до улюблених (потребує notice_id оголошення в query)





```

<!-- Этот проект был создан при помощи [Create React App](https://github.com/facebook/create-react-app). Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js. [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Клонируй этот репозиторий.
3. Измени имя папки с `react-homework-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи базовые зависимости проекта командой `npm install`.
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000). Эта страница будет автоматически перезагружаться после
   сохранения изменений в файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда
обновляется ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле `package.json`
отредактировать поле `homepage`, заменив `your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и выставить раздачу продакшн версии файлов из папки `/root`
ветки `gh-pages`, если это небыло сделано автоматически.

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в выпадающем окне перейти по ссылке `Details`.

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть по адресу указанному в отредактированном свойстве `homepage`.
Например, вот ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок связанных с неправильными путями к CSS и JS файлам проекта
(**404**). Скорее всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации, необходимо дополнительно настроить компонент `<BrowserRouter>`,
передав в пропе `basename` точное название твоего репозитория. Слеши в начале и конце строки обязательны.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
``` -->

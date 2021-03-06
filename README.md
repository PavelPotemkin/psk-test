# Тестовое задание на должность frontend-разработчика

Стек для решения задачи:
-	Vue.js 3
-	Node 16+
Проект должен разворачиваться из репозитория Git и быть работоспособным после установки зависимостей и сборки dev версии.

Что предоставляется от нас:
-	Файл с данными для отрисовки (data.json) https://drive.google.com/file/d/1sDfKJp-EYWsQKK5XcUNG7q5HiCtungA0/view?usp=sharing

## Задача 1: Используя фреймворк Vue.js написать приложение для отображения жилого комплекса в виде шахматки.
Для решения задачи необходимо сделать следующие:
-	Создать проект на Vue.js
-	Сверстать макет шахматки (можно использовать предложенный пример) с использованием декомпозиции элементов по компонентам
Пример макета шахматки:
 
## Задача 2: Для созданного приложения необходимо реализовать загрузку данных (json) из предложенного файла
-	Эмулировать получение данных из REST API путем обычной загрузки готовых данных из файла.
-	Вывести полученные данные в соответствующие компоненты шахматки.
-	Выводить подробные данные по объектам недвижимости при наведении на элемент шахматки, либо при клике на него, либо и то и другое с разными наборами данных (на усмотрение разработчика)

Структура данных в файле:
flats - объект, ключами которого является uid объекта недвижимости, содержит подробные данные по недвижимости:
-	cost - цена в рублях
-	type - тип объекта (квартира, нежилое, паркинг)
-	floor - номер этажа
-	state - дополнительное состояние (не использовать)
-	number - номер квартиры
-	square - площадь квартиры в кв.м
-	status - текущий статус (выданы ключи, бронь, свободна) - необходимо окрашивать элементы шахматки в зависимости от значения
- article (не используется)
-	plan_type - тип планировки
-	subsidy - субсидированная (булевое значение), при положительном значении делать пометку на шахматке
-	marginal - маржинальная (булевое значение), при положительном значении делать пометку на шахматке
-	renovation - с ремонтом (булевое значение), при положительном значении делать пометку на шахматке
-	installment - с рассрочкой (булевое значение), при положительном значении делать пометку на шахматке

houses - массив с юидами доступных домов
entrances - данные для отрисовки шахматки по подъездам:

1.	id - юид подъезда
2.	house_id - юид дома, которому принадлежит подъезд
3.	title - название подъезда
4.	floors - массив объектов с данными по этажам:
    -	floor: номер этажа
    -	flats: массив объектов с данными по объектам недвижимости на этаже:
        -	id - юид объекта недвижимости
        -	number - номер объекта на этаже

## Дополнительные задачи: 
1.	Выделять весь этаж и стояк на шахматке при наведении на объект
2.	Реализовать фильтрацию шахматки по следующим параметрам (должны влиять на отрисовку домов целиком, либо на затемнение/неактивность элементов шахматки, показывающих объекты недвижимости(квартиры), не попадающих в заданную пользователем выборку):
    - house - отрисовывать только выбранные дома
    -	cost - по ценовому диапазону
    -	square - по площади объектов недвижимости
    -	status - только объекты с выбранными статусами
    -	plan_type - только объекты с выбранными типами
    -	subsidy, marginal, renovation, installment - только те объекты, у которых соответствующее поле имеет значение true.

# angularpro-20190406


# Questions

1. How to change query list?

Я еще раз подумал над вопросом и понял что он не совсем корректный.
Зачем нужно изменять QueryList?
QueryList может собирать информацию со вью основанную на изменении данных.
Так вот более архитекторно правильный подход будет изменять сами данные, но не наборот.
https://stackblitz.com/edit/ng-querylist?file=src%2Fapp%2Fmarker.directive.ts

2. Will @Attribute work with async

@Attribute не будет работать с интерполяцией вообще:
https://stackblitz.com/edit/ng-attr-async?file=src%2Fapp%2Fhello.component.ts


3. Angular-Elements: input params: Objects

На данный момент есть только 2 способа передачи сложных сущностей в элемент: 
- JSON.strigify и передавать как строку (разобрали на занятии)
- Добавлять ссылку в свойство нативного объекта DOM
https://github.com/angular/angular/issues/24415

4. Создание расписания (Scheduler) которое будет откладывать выполнение на 5s:

Мы это можем сделать унаследовавшись от AsyncScheduler и переопределив метод schedule
Пример кода добавлен сюда - 3-reactive/rxjs-typescript-starter/src/index.ts

5. Почему нужны скобочки в конструкции "-a-b-(c|)"
Цитирую из доки: "'(abc)' will emit the values of a, b, and c synchronously in the same frame"
То есть мы ожидаем, что последовательность выдаст нам c и завершится в этот же момент времени.

6. Задача по производительности - https://stackblitz.com/edit/angular-perf?file=src/app/app.component.ts

Решения и комментарии можно слать мне на почту.

7. markForCheck in asyncPipe

Да, так и есть. Для тех кто не верил - https://github.com/angular/angular/blob/f8096d499324cf0961f092944bbaedd05364eea1/packages/common/src/pipes/async_pipe.ts#L143

8. ngrx ssr state update

Решения из коробки на данный момент нет. 
Под каждый проект пишут свое.

9. ssr express rps

К сожалению, на прототипе было сложно что-то протестировать. 
Прототип работает двольно шустро. Можете оценить сами - npm run perf-test (использовался инструмент artillery)
Никаких свежих аналитических срезов не нашел.
Работы того же Охрименко по сравнительному анализу не обновлялись уже 2 года - https://github.com/ServerSideRender

10. ng-packager parallel builds (entryPoints is growing)

для этого вопроса я бы запросил прототип в github

11. npm audit - how to define medium level

нет никаких алгоритмов, работает по принципу поиска уже заявленых уязвимостей
https://stackoverflow.com/questions/55569305/how-npm-audit-works
# Intermediate Level

---

## 新功能的設計方式

透過 `WidgetService` 與 `BehaviorSubject` 來保存並居中傳遞要 Filter 的名字，再讓需要處理的 Widget 自行監聽並處理。

## 是否有想過其他解決方式？如果有請說明不同方式及優缺點

1. 主要是本來想用 `Signal` ，不過我看官方文件不推薦用 `Signal` 來傳遞狀態，所以才換回 `BehaviorSubject`。
2. 其實不想用 Service 來傳遞也可以透過擴充母元件 `WidgetsComponent` 來傳遞，不過這樣會讓其變得更複雜。

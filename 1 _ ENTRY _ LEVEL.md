# Entry Level

---

## 如何啟動執行整個專案

1. 打開終端機並先進入此專案的根目錄下
2. 先安裝相依套件

```bash
npm install
```

> 也可使用其他套件管理工具，如 `yarn` 來安裝相依套件。

3. 啟動專案

```bash
npm start
```

> 這個專案是使用 Angular CLI 所建立的，所以亦可以使用 `ng` 指令來執行專案。

4. 打開瀏覽器並輸入 `http://localhost:4200/` 即可看到專案的畫面

## 如何驗證功能是否正確

當前所使用的範例 JSON 在 `src/app/constants/fake-widget-config-data.ts` 裡，只要編輯該檔案即可驗證是否功能皆正確無誤。

## 簡易的專案架構說明

- `src/app/components/widgets/`： Widgets 的所有相關元件都放在這裡面。
    - `src/app/components/widgets/widget.ts`： Widget Config 的所有相關型別宣告都在裡面。
    - `src/app/components/widgets/widgets.component.ts|.scss|.html|.spec.ts`： Widgets 的主要母元件。
    - `src/app/components/widgets/components/`： Widgets 的子元件都放在這裡面，如 `GridWidgetComponent`
      與 `TextWidgetComponent` 。
    - `src/app/components/widgets/directives/`： Widgets 的 Directives
      都放在這裡面，目前只有最主要的 `GridPositionDirective` ，用來控制 Widget 的位置 。


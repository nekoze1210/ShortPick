<div align="center">
  <img src="./docs/logo.png" width="250px">
</div>

## ShortPick

ShortPick はショートカットで閲覧中のサイトを SlackWebhook で共有できるプラグインアプリケーションです。

## Description

1. 設定画面から Webhook URL と投稿先チャンネル名、ターゲットブラウザを登録します。
2. ショートカット `⌘ + ⇧ + L`を入力します。
3. 登録したチャンネルに閲覧中のサイトの URL が共有されます。

### Supported Browsers

- Chrome
- Safari

※ Firefox 対応は現在実装中です。

## Download

<a href="https://github.com/nekoze1210/ShortPick/releases" target="_blank">releases</a>

## Contributing

ShortPick に共感を持っていただけた方、 改善したい方  はいつでも歓迎します。

### Installation(DEV)

```bash
# package install
yarn
# start application
yarn start
# build browser views
yarn build:browser
# watch building browser views
yarn watch:browser
```

### Packaging

```bash
yarn package
```

## Donation

<a href="https://osushi.love/intent/post/72cd8f73d45a468f8a6185683965f712" target="ossh-post"><img src="https://platform.osushi.love/images/btn_s.png" alt="お寿司を送る" /></a>


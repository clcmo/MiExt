# MiExt for Chrome, Opera and others browser extensions

---

## Project Structure

MiExt/
├── manifest.json
├── popup.html
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── src/
    ├── models/
    │   ├── ContentModel.js       # Model para content script
    │   └── PopupModel.js         # Model para popup
    ├── views/
    │   ├── ContentView.js        # View para content script
    │   └── PopupView.js          # View para popup
    └── controllers/
        ├── ContentController.js  # Controller para content script
        └── PopupController.js    # Controller para popup

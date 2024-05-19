import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
  timeout: 3000,
  position: "top-right"
};

export default {
  install(app) {
    app.use(Toast, options);
  }
};

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
  });
  app.vueApp.use(vuetify);
});

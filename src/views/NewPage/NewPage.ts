/* eslint-disable max-classes-per-file */
import { Vue, Options } from 'vue-class-component';

class Props {
  public pageId!: string;
}

@Options({
  name: 'NewPage',
  template: require('./NewPage.html'),
})
export default class NewPage extends Vue.with(Props) {
  protected pushHome(): void {
    void this.$router.push({
      name: 'Home',
    });
  }
}

/* eslint-disable no-underscore-dangle */
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
  name: 'subStore',
  namespaced: true,
})
export default class SubStore extends VuexModule {
  private _testAttribute = '';

  // ---------------------------------------------------------
  // Mutation
  // ---------------------------------------------------------

  @Mutation
  public SET_TEST_ATTRIBUTE(value: string): void {
    this._testAttribute = value;
  }

  // ---------------------------------------------------------
  // Action
  // ---------------------------------------------------------

  @Action({ commit: 'SET_TEST_ATTRIBUTE' })
  public setTestAttribute(value: string): string {
    return value;
  }

  // ---------------------------------------------------------
  // Getter
  // ---------------------------------------------------------

  public get testAttribute(): string {
    return this._testAttribute;
  }
}

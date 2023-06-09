import { DomService } from './services/DomService.ts';
import { appContainer } from './styles/global.css.ts';
import { IComponentResult } from './utilTypes';

export function renderApp({ listeners, render }: IComponentResult) {
    const app = `
                <div class="${appContainer}">
                  <h1>Myth and Legends</h1>
                  ${render()}
                </div>
`;
    DomService.render('#app', app, listeners);
}

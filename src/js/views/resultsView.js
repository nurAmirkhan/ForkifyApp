import View from './view';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipies found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();

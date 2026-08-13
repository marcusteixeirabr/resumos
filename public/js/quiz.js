(function (global) {
  'use strict';

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderQuiz(container, questions, options) {
    options = options || {};
    if (!container) return;

    container.innerHTML = '';
    container.classList.add('quiz');

    var title = options.title || 'Exercícios';
    var onFinish = options.onFinish;
    var fieldsets = [];

    container.appendChild(el('h3', 'quiz-title', title));

    var form = el('form', 'quiz-form');
    form.setAttribute('novalidate', '');

    questions.forEach(function (q, qi) {
      var fieldset = el('fieldset', 'quiz-question');
      var legend = el('legend', 'quiz-question-text');
      legend.appendChild(el('span', 'quiz-num', String(qi + 1) + '.'));
      if (q.label) legend.appendChild(el('span', 'quiz-label', q.label));
      legend.appendChild(document.createTextNode(' ' + q.question));
      fieldset.appendChild(legend);

      var opts = el('div', 'quiz-options');
      q.options.forEach(function (optText, oi) {
        var id = 'quiz-q' + qi + '-o' + oi;
        var label = el('label', 'quiz-option');
        label.setAttribute('for', id);
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz-q' + qi;
        input.value = String(oi);
        input.id = id;
        label.appendChild(input);
        label.appendChild(el('span', 'quiz-option-text', optText));
        opts.appendChild(label);
      });
      fieldset.appendChild(opts);
      form.appendChild(fieldset);
      fieldsets.push(fieldset);
    });

    var actions = el('div', 'quiz-actions');
    var gradeBtn = el('button', 'quiz-btn-primary', 'Corrigir');
    gradeBtn.type = 'submit';
    actions.appendChild(gradeBtn);
    form.appendChild(actions);
    container.appendChild(form);

    var result = el('div', 'quiz-result');
    result.hidden = true;
    container.appendChild(result);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var score = 0;

      questions.forEach(function (q, qi) {
        var selected = form.querySelector('input[name="quiz-q' + qi + '"]:checked');
        var chosen = selected ? parseInt(selected.value, 10) : null;
        var ok = chosen === q.correctIndex;
        if (ok) score += 1;

        var labels = fieldsets[qi].querySelectorAll('.quiz-option');
        labels.forEach(function (lab, oi) {
          if (oi === q.correctIndex) lab.classList.add('correct');
          if (chosen === oi && !ok) lab.classList.add('incorrect');
        });

        if (q.explanation) {
          fieldsets[qi].appendChild(el('p', 'quiz-explanation', q.explanation));
        }
      });

      form.querySelectorAll('input').forEach(function (inp) {
        inp.disabled = true;
      });
      gradeBtn.hidden = true;

      result.hidden = false;
      result.innerHTML = '';
      result.appendChild(el('p', 'quiz-score', score + '/' + questions.length));
      result.appendChild(el(
        'p',
        'quiz-score-label',
        'Você acertou ' + score + ' de ' + questions.length + ' questões.'
      ));

      var redo = el('button', 'quiz-btn-secondary', 'Refazer');
      redo.type = 'button';
      redo.addEventListener('click', function () {
        if (typeof onFinish === 'function') onFinish();
        else renderQuiz(container, questions, options);
      });
      result.appendChild(redo);
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  global.renderQuiz = renderQuiz;
  global.shuffleQuiz = shuffle;
})(typeof window !== 'undefined' ? window : globalThis);

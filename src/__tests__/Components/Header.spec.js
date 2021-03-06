import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { expect } from './../../setupChai';
import Header from './../../Components/Header/Header';

it('should have correct element value', () => {
  const wrapper = mount((
    <MemoryRouter>
      <Header
        title="React Playground"
        subtitle="My personal playground while learning React"
      />
    </MemoryRouter>
  ));
  const title = wrapper.find('.rp-header__title').hostNodes().text();
  const description = wrapper.find('.rp-header__subtitle').hostNodes().text();

  expect(title).to.equal('React Playground');
  expect(description).to.equal('My personal playground while learning React');
});

it('should render as HTML', () => {
  const wrapper = mount((
    <MemoryRouter>
      <Header
        title="<strong>React</strong> Playground"
        subtitle="My personal playground while learning <strong>React</strong>"
      />
    </MemoryRouter>
  ));

  expect(wrapper.html()).to.equal('<header class="rp-header"><a class="rp-header__link" href="/"><img class="rp-header__logo" src="logo.svg" alt="logo"><span class="rp-header__title"><strong>React</strong> Playground</span><span class="rp-header__subtitle">My personal playground while learning <strong>React</strong></span></a></header>');
});

import * as React from 'react';
import * as Enzyme from 'Enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = Enzyme.shallow(<Hello name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = Enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = Enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        Enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
    }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        Enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
    }).toThrow();
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index';

it('should have a list of cars', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    const listEl = container.getElementsByClassName('list');
    expect(listEl.length).toEqual(0);
});

it('should have 0 cars in the list', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );

    const carsList = container.getElementsByClassName('carItem');
    expect(carsList.length).toEqual(0);
});

export {};
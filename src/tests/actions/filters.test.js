import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';


test('should generate set start date action object',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });


});

test('should generate set end date action object',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should set text filter', () => {
    const action = setTextFilter('amount');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'amount'
    });
});

test('should set text filter with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
})

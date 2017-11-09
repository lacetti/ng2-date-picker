import { ECalendarValue } from '../common/types/calendar-value-enum';
import { EventEmitter, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IMonth } from './month.model';
import { MonthCalendarService } from './month-calendar.service';
import { Moment } from 'moment';
import { IMonthCalendarConfig, IMonthCalendarConfigInternal } from './month-calendar-config';
import { ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';
import { CalendarValue } from '../common/types/calendar-value';
import { UtilsService } from '../common/services/utils/utils.service';
import { DateValidator } from '../common/types/validator.type';
import { SingleCalendarValue } from '../common/types/single-calendar-value';
export declare class MonthCalendarComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    monthCalendarService: MonthCalendarService;
    utilsService: UtilsService;
    config: IMonthCalendarConfig;
    displayDate: Moment;
    minDate: Moment;
    maxDate: Moment;
    theme: string;
    onSelect: EventEmitter<IMonth>;
    onNavHeaderBtnClick: EventEmitter<null>;
    isInited: boolean;
    componentConfig: IMonthCalendarConfigInternal;
    _selected: Moment[];
    yearMonths: IMonth[][];
    _currentDateView: Moment;
    inputValue: CalendarValue;
    inputValueType: ECalendarValue;
    validateFn: DateValidator;
    _shouldShowCurrent: boolean;
    navLabel: string;
    showLeftNav: boolean;
    showRightNav: boolean;
    showSecondaryLeftNav: boolean;
    showSecondaryRightNav: boolean;
    api: {
        toggleCalendar: any;
        moveCalendarTo: any;
    };
    selected: Moment[];
    currentDateView: Moment;
    constructor(monthCalendarService: MonthCalendarService, utilsService: UtilsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    init(): void;
    writeValue(value: CalendarValue): void;
    registerOnChange(fn: any): void;
    onChangeCallback(_: any): void;
    registerOnTouched(fn: any): void;
    validate(formControl: FormControl): ValidationErrors | any;
    processOnChangeCallback(value: Moment[]): CalendarValue;
    initValidators(): void;
    monthClicked(month: IMonth): void;
    onLeftNav(): void;
    onLeftSecondaryNav(): void;
    onRightNav(): void;
    onRightSecondaryNav(): void;
    toggleCalendar(): void;
    getMonthBtnCssClass(month: IMonth): {
        [klass: string]: boolean;
    };
    shouldShowCurrent(): boolean;
    goToCurrent(): void;
    moveCalendarTo(to: SingleCalendarValue): void;
    handleConfigChange(config: SimpleChange): void;
}
/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxScheduler',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSchedulerComponent implements OnChanges
{
   @Input('appointmentOpacity') attrAppointmentOpacity: any;
   @Input('appointmentsMinHeight') attrAppointmentsMinHeight: any;
   @Input('appointmentDataFields') attrAppointmentDataFields: any;
   @Input('appointmentTooltips') attrAppointmentTooltips: any;
   @Input('columnsHeight') attrColumnsHeight: any;
   @Input('contextMenu') attrContextMenu: any;
   @Input('contextMenuOpen') attrContextMenuOpen: any;
   @Input('contextMenuClose') attrContextMenuClose: any;
   @Input('contextMenuItemClick') attrContextMenuItemClick: any;
   @Input('contextMenuCreate') attrContextMenuCreate: any;
   @Input('changedAppointments') attrChangedAppointments: any;
   @Input('disabled') attrDisabled: any;
   @Input('date') attrDate: any;
   @Input('dayNameFormat') attrDayNameFormat: any;
   @Input('enableHover') attrEnableHover: any;
   @Input('editDialog') attrEditDialog: any;
   @Input('editDialogDateTimeFormatString') attrEditDialogDateTimeFormatString: any;
   @Input('editDialogDateFormatString') attrEditDialogDateFormatString: any;
   @Input('editDialogOpen') attrEditDialogOpen: any;
   @Input('editDialogCreate') attrEditDialogCreate: any;
   @Input('editDialogKeyDown') attrEditDialogKeyDown: any;
   @Input('editDialogClose') attrEditDialogClose: any;
   @Input('exportSettings') attrExportSettings: any;
   @Input('legendPosition') attrLegendPosition: any;
   @Input('legendHeight') attrLegendHeight: any;
   @Input('localization') attrLocalization: any;
   @Input('min') attrMin: any;
   @Input('max') attrMax: any;
   @Input('ready') attrReady: any;
   @Input('renderAppointment') attrRenderAppointment: any;
   @Input('rendering') attrRendering: any;
   @Input('rendered') attrRendered: any;
   @Input('rtl') attrRtl: any;
   @Input('resources') attrResources: any;
   @Input('rowsHeight') attrRowsHeight: any;
   @Input('showToolbar') attrShowToolbar: any;
   @Input('showLegend') attrShowLegend: any;
   @Input('scrollBarSize') attrScrollBarSize: any;
   @Input('source') attrSource: any;
   @Input('statuses') attrStatuses: any;
   @Input('touchRowsHeight') attrTouchRowsHeight: any;
   @Input('theme') attrTheme: any;
   @Input('touchAppointmentsMinHeight') attrTouchAppointmentsMinHeight: any;
   @Input('touchScrollBarSize') attrTouchScrollBarSize: any;
   @Input('timeZone') attrTimeZone: any;
   @Input('touchDayNameFormat') attrTouchDayNameFormat: any;
   @Input('toolBarRangeFormat') attrToolBarRangeFormat: any;
   @Input('toolBarRangeFormatAbbr') attrToolBarRangeFormatAbbr: any;
   @Input('toolbarHeight') attrToolbarHeight: any;
   @Input('views') attrViews: any;
   @Input('view') attrView: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['appointmentOpacity','appointmentsMinHeight','appointmentDataFields','appointmentTooltips','columnsHeight','contextMenu','contextMenuOpen','contextMenuClose','contextMenuItemClick','contextMenuCreate','changedAppointments','disabled','date','dayNameFormat','enableHover','editDialog','editDialogDateTimeFormatString','editDialogDateFormatString','editDialogOpen','editDialogCreate','editDialogKeyDown','editDialogClose','exportSettings','height','legendPosition','legendHeight','localization','min','max','ready','renderAppointment','rendering','rendered','rtl','resources','rowsHeight','showToolbar','showLegend','scrollBarSize','source','statuses','touchRowsHeight','theme','touchAppointmentsMinHeight','touchScrollBarSize','timeZone','touchDayNameFormat','toolBarRangeFormat','toolBarRangeFormatAbbr','toolbarHeight','views','view','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxScheduler;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxScheduler(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxScheduler(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxScheduler(this.properties[i])) {
                  this.host.jqxScheduler(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      childEl.classList.add(...classes);
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScheduler', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxScheduler('setOptions', options);
   }

   // jqxSchedulerComponent properties
   appointmentOpacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('appointmentOpacity', arg);
      } else {
          return this.host.jqxScheduler('appointmentOpacity');
      }
   }

   appointmentsMinHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('appointmentsMinHeight', arg);
      } else {
          return this.host.jqxScheduler('appointmentsMinHeight');
      }
   }

   appointmentDataFields(arg?: jqwidgets.SchedulerAppointmentDataFields) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('appointmentDataFields', arg);
      } else {
          return this.host.jqxScheduler('appointmentDataFields');
      }
   }

   appointmentTooltips(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('appointmentTooltips', arg);
      } else {
          return this.host.jqxScheduler('appointmentTooltips');
      }
   }

   columnsHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('columnsHeight', arg);
      } else {
          return this.host.jqxScheduler('columnsHeight');
      }
   }

   contextMenu(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('contextMenu', arg);
      } else {
          return this.host.jqxScheduler('contextMenu');
      }
   }

   contextMenuOpen(arg?: (menu: any, appointment: any, event: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('contextMenuOpen', arg);
      } else {
          return this.host.jqxScheduler('contextMenuOpen');
      }
   }

   contextMenuClose(arg?: (menu: any, appointment: any, event: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('contextMenuClose', arg);
      } else {
          return this.host.jqxScheduler('contextMenuClose');
      }
   }

   contextMenuItemClick(arg?: (menu: any, appointment: any, event: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('contextMenuItemClick', arg);
      } else {
          return this.host.jqxScheduler('contextMenuItemClick');
      }
   }

   contextMenuCreate(arg?: (menu: any, appointment: any, event: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('contextMenuCreate', arg);
      } else {
          return this.host.jqxScheduler('contextMenuCreate');
      }
   }

   changedAppointments(arg?: Array<jqwidgets.SchedulerChangedAppointments>) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('changedAppointments', arg);
      } else {
          return this.host.jqxScheduler('changedAppointments');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('disabled', arg);
      } else {
          return this.host.jqxScheduler('disabled');
      }
   }

   date(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('date', arg);
      } else {
          return this.host.jqxScheduler('date');
      }
   }

   dayNameFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('dayNameFormat', arg);
      } else {
          return this.host.jqxScheduler('dayNameFormat');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('enableHover', arg);
      } else {
          return this.host.jqxScheduler('enableHover');
      }
   }

   editDialog(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialog', arg);
      } else {
          return this.host.jqxScheduler('editDialog');
      }
   }

   editDialogDateTimeFormatString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
      } else {
          return this.host.jqxScheduler('editDialogDateTimeFormatString');
      }
   }

   editDialogDateFormatString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogDateFormatString', arg);
      } else {
          return this.host.jqxScheduler('editDialogDateFormatString');
      }
   }

   editDialogOpen(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogOpen', arg);
      } else {
          return this.host.jqxScheduler('editDialogOpen');
      }
   }

   editDialogCreate(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogCreate', arg);
      } else {
          return this.host.jqxScheduler('editDialogCreate');
      }
   }

   editDialogKeyDown(arg?: (dialog?: any, fields?: any, editAppointment?: any, event?: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogKeyDown', arg);
      } else {
          return this.host.jqxScheduler('editDialogKeyDown');
      }
   }

   editDialogClose(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('editDialogClose', arg);
      } else {
          return this.host.jqxScheduler('editDialogClose');
      }
   }

   exportSettings(arg?: jqwidgets.SchedulerExportSettings) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('exportSettings', arg);
      } else {
          return this.host.jqxScheduler('exportSettings');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('height', arg);
      } else {
          return this.host.jqxScheduler('height');
      }
   }

   legendPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('legendPosition', arg);
      } else {
          return this.host.jqxScheduler('legendPosition');
      }
   }

   legendHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('legendHeight', arg);
      } else {
          return this.host.jqxScheduler('legendHeight');
      }
   }

   localization(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('localization', arg);
      } else {
          return this.host.jqxScheduler('localization');
      }
   }

   min(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('min', arg);
      } else {
          return this.host.jqxScheduler('min');
      }
   }

   max(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('max', arg);
      } else {
          return this.host.jqxScheduler('max');
      }
   }

   ready(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('ready', arg);
      } else {
          return this.host.jqxScheduler('ready');
      }
   }

   renderAppointment(arg?: (data: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('renderAppointment', arg);
      } else {
          return this.host.jqxScheduler('renderAppointment');
      }
   }

   rendering(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('rendering', arg);
      } else {
          return this.host.jqxScheduler('rendering');
      }
   }

   rendered(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('rendered', arg);
      } else {
          return this.host.jqxScheduler('rendered');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('rtl', arg);
      } else {
          return this.host.jqxScheduler('rtl');
      }
   }

   resources(arg?: jqwidgets.SchedulerResources) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('resources', arg);
      } else {
          return this.host.jqxScheduler('resources');
      }
   }

   rowsHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('rowsHeight', arg);
      } else {
          return this.host.jqxScheduler('rowsHeight');
      }
   }

   showToolbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('showToolbar', arg);
      } else {
          return this.host.jqxScheduler('showToolbar');
      }
   }

   showLegend(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('showLegend', arg);
      } else {
          return this.host.jqxScheduler('showLegend');
      }
   }

   scrollBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('scrollBarSize', arg);
      } else {
          return this.host.jqxScheduler('scrollBarSize');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('source', arg);
      } else {
          return this.host.jqxScheduler('source');
      }
   }

   statuses(arg?: jqwidgets.SchedulerStatuses) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('statuses', arg);
      } else {
          return this.host.jqxScheduler('statuses');
      }
   }

   touchRowsHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('touchRowsHeight', arg);
      } else {
          return this.host.jqxScheduler('touchRowsHeight');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('theme', arg);
      } else {
          return this.host.jqxScheduler('theme');
      }
   }

   touchAppointmentsMinHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
      } else {
          return this.host.jqxScheduler('touchAppointmentsMinHeight');
      }
   }

   touchScrollBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('touchScrollBarSize', arg);
      } else {
          return this.host.jqxScheduler('touchScrollBarSize');
      }
   }

   timeZone(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('timeZone', arg);
      } else {
          return this.host.jqxScheduler('timeZone');
      }
   }

   touchDayNameFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('touchDayNameFormat', arg);
      } else {
          return this.host.jqxScheduler('touchDayNameFormat');
      }
   }

   toolBarRangeFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('toolBarRangeFormat', arg);
      } else {
          return this.host.jqxScheduler('toolBarRangeFormat');
      }
   }

   toolBarRangeFormatAbbr(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
      } else {
          return this.host.jqxScheduler('toolBarRangeFormatAbbr');
      }
   }

   toolbarHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('toolbarHeight', arg);
      } else {
          return this.host.jqxScheduler('toolbarHeight');
      }
   }

   views(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('views', arg);
      } else {
          return this.host.jqxScheduler('views');
      }
   }

   view(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('view', arg);
      } else {
          return this.host.jqxScheduler('view');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScheduler('width', arg);
      } else {
          return this.host.jqxScheduler('width');
      }
   }


   // jqxSchedulerComponent functions
   addAppointment(item: jqwidgets.SchedulerAppointmentDataFields): void {
      this.host.jqxScheduler('addAppointment', item);
   }

   beginAppointmentsUpdate(): void {
      this.host.jqxScheduler('beginAppointmentsUpdate');
   }

   clearAppointmentsSelection(): void {
      this.host.jqxScheduler('clearAppointmentsSelection');
   }

   clearSelection(): void {
      this.host.jqxScheduler('clearSelection');
   }

   closeMenu(): void {
      this.host.jqxScheduler('closeMenu');
   }

   closeDialog(): void {
      this.host.jqxScheduler('closeDialog');
   }

   deleteAppointment(appointmenId: string): void {
      this.host.jqxScheduler('deleteAppointment', appointmenId);
   }

   destroy(): void {
      this.host.jqxScheduler('destroy');
   }

   endAppointmentsUpdate(): void {
      this.host.jqxScheduler('endAppointmentsUpdate');
   }

   ensureAppointmentVisible(id: string): void {
      this.host.jqxScheduler('ensureAppointmentVisible', id);
   }

   ensureVisible(item: any, resourceId: string): void {
      this.host.jqxScheduler('ensureVisible', item, resourceId);
   }

   exportData(format: string): any {
      return this.host.jqxScheduler('exportData', format);
   }

   focus(): void {
      this.host.jqxScheduler('focus');
   }

   getAppointmentProperty(appointmentId: string, name: string): any {
      return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
   }

   getSelection(): jqwidgets.SchedulerGetSelection {
      return this.host.jqxScheduler('getSelection');
   }

   getAppointments(): Array<jqwidgets.SchedulerAppointmentDataFields> {
      return this.host.jqxScheduler('getAppointments');
   }

   getDataAppointments(): Array<any> {
      return this.host.jqxScheduler('getDataAppointments');
   }

   hideAppointmentsByResource(resourcesId: string): void {
      this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
   }

   openMenu(left: number, top: number): void {
      this.host.jqxScheduler('openMenu', left, top);
   }

   openDialog(left: number, top: number): void {
      this.host.jqxScheduler('openDialog', left, top);
   }

   selectAppointment(appointmentId: string): void {
      this.host.jqxScheduler('selectAppointment', appointmentId);
   }

   setAppointmentProperty(appointmentId: string, name: string, value: any): void {
      this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
   }

   selectCell(date: any, allday: boolean, resourceId: string): void {
      this.host.jqxScheduler('selectCell', date, allday, resourceId);
   }

   showAppointmentsByResource(resourceId: string): void {
      this.host.jqxScheduler('showAppointmentsByResource', resourceId);
   }

   scrollWidth(): number {
      return this.host.jqxScheduler('scrollWidth');
   }

   scrollHeight(): number {
      return this.host.jqxScheduler('scrollHeight');
   }

   scrollLeft(left: number): void {
      this.host.jqxScheduler('scrollLeft', left);
   }

   scrollTop(top: number): void {
      this.host.jqxScheduler('scrollTop', top);
   }


   // jqxSchedulerComponent events
   @Output() onAppointmentChange = new EventEmitter();
   @Output() onAppointmentClick = new EventEmitter();
   @Output() onAppointmentDoubleClick = new EventEmitter();
   @Output() onAppointmentDelete = new EventEmitter();
   @Output() onAppointmentAdd = new EventEmitter();
   @Output() onBindingComplete = new EventEmitter();
   @Output() onCellClick = new EventEmitter();
   @Output() onCellDoubleClick = new EventEmitter();
   @Output() onContextMenuOpen = new EventEmitter();
   @Output() onContextMenuClose = new EventEmitter();
   @Output() onContextMenuItemClick = new EventEmitter();
   @Output() onContextMenuCreate = new EventEmitter();
   @Output() onDateChange = new EventEmitter();
   @Output() onEditRecurrenceDialogOpen = new EventEmitter();
   @Output() onEditRecurrenceDialogClose = new EventEmitter();
   @Output() onEditDialogCreate = new EventEmitter();
   @Output() onEditDialogOpen = new EventEmitter();
   @Output() onEditDialogClose = new EventEmitter();
   @Output() onViewChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('appointmentChange', (eventData: any) => { this.onAppointmentChange.emit(eventData); });
      this.host.on('appointmentClick', (eventData: any) => { this.onAppointmentClick.emit(eventData); });
      this.host.on('appointmentDoubleClick', (eventData: any) => { this.onAppointmentDoubleClick.emit(eventData); });
      this.host.on('appointmentDelete', (eventData: any) => { this.onAppointmentDelete.emit(eventData); });
      this.host.on('appointmentAdd', (eventData: any) => { this.onAppointmentAdd.emit(eventData); });
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('cellClick', (eventData: any) => { this.onCellClick.emit(eventData); });
      this.host.on('cellDoubleClick', (eventData: any) => { this.onCellDoubleClick.emit(eventData); });
      this.host.on('contextMenuOpen', (eventData: any) => { this.onContextMenuOpen.emit(eventData); });
      this.host.on('contextMenuClose', (eventData: any) => { this.onContextMenuClose.emit(eventData); });
      this.host.on('contextMenuItemClick', (eventData: any) => { this.onContextMenuItemClick.emit(eventData); });
      this.host.on('contextMenuCreate', (eventData: any) => { this.onContextMenuCreate.emit(eventData); });
      this.host.on('dateChange', (eventData: any) => { this.onDateChange.emit(eventData); });
      this.host.on('editRecurrenceDialogOpen', (eventData: any) => { this.onEditRecurrenceDialogOpen.emit(eventData); });
      this.host.on('editRecurrenceDialogClose', (eventData: any) => { this.onEditRecurrenceDialogClose.emit(eventData); });
      this.host.on('editDialogCreate', (eventData: any) => { this.onEditDialogCreate.emit(eventData); });
      this.host.on('editDialogOpen', (eventData: any) => { this.onEditDialogOpen.emit(eventData); });
      this.host.on('editDialogClose', (eventData: any) => { this.onEditDialogClose.emit(eventData); });
      this.host.on('viewChange', (eventData: any) => { this.onViewChange.emit(eventData); });
   }

} //jqxSchedulerComponent



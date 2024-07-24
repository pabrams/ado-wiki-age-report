import * as React from "react";
import { IStatusProps, Status, Statuses, StatusSize } from "azure-devops-ui/Status";
import { WorkItemTypeReference, WorkItem } from "azure-devops-extension-api/WorkItemTracking/WorkItemTracking";
import {
    ITableColumn,
    SimpleTableCell
} from "azure-devops-ui/Table";
import { WikiAgeContent } from './wikiAge';

export interface PageTableItem {
    projectId:string;
    pageID: string;
    pagePath: string;
    fileName: string;
    gitItemPath:string;
    pageURL:string;
    updateTimestamp:string;
    updateDateMili:number;
    updatedBy:string;
    pageOwner:string;
    daysOld:number;
    daysThreshold:number;
    workItemType:WorkItemTypeReference|undefined;
    hasWorkItemCreated:Boolean;
    index:number;
    pageRef:WikiAgeContent;
    areaPath:string;
    workItemNumber:string;
    workItemURL:string;
}


export function RenderDaysCount(
    rowIndex: number,
    columnIndex: number,
    tableColumn: ITableColumn<PageTableItem>,
    tableItem: PageTableItem
    ): JSX.Element
    {
    const { daysOld} = tableItem;
    return (
    
        <SimpleTableCell columnIndex={columnIndex} tableColumn={tableColumn} key={"col-" + columnIndex} contentClassName="fontWeightSemiBold font-weight-semibold fontSizeM font-size-m scroll-hidden cell-row-center">
            <span className="days-column">{daysOld}</span>
        </SimpleTableCell>
    );
}
export function RenderTimestamp(
    rowIndex: number,
    columnIndex: number,
    tableColumn: ITableColumn<PageTableItem>,
    tableItem: PageTableItem
    ): JSX.Element
    {
    const { updateTimestamp} = tableItem;
    return (
    
        <SimpleTableCell columnIndex={columnIndex} tableColumn={tableColumn} key={"col-" + columnIndex} contentClassName="fontWeightSemiBold font-weight-semibold fontSizeM font-size-m scroll-hidden">
            <span className="tableText">{updateTimestamp}</span>
        </SimpleTableCell>
    );
}

export function RenderName(
    rowIndex: number,
    columnIndex: number,
    tableColumn: ITableColumn<PageTableItem>,
    tableItem: PageTableItem
    ): JSX.Element
    {
    const { updatedBy} = tableItem;
    return (
    
        <SimpleTableCell columnIndex={columnIndex} tableColumn={tableColumn} key={"col-" + columnIndex} contentClassName="fontWeightSemiBold font-weight-semibold fontSizeM font-size-m scroll-hidden">
            <span className="tableText">{updatedBy}</span>
        </SimpleTableCell>
    );
}

export function RenderOwner(
    rowIndex: number,
    columnIndex: number,
    tableColumn: ITableColumn<PageTableItem>,
    tableItem: PageTableItem
    ): JSX.Element
    {
    const { pageOwner} = tableItem;
    return (
    
        <SimpleTableCell columnIndex={columnIndex} tableColumn={tableColumn} key={"col-" + columnIndex} contentClassName="fontWeightSemiBold font-weight-semibold fontSizeM font-size-m scroll-hidden">
            <span className="tableText">{pageOwner}</span>
        </SimpleTableCell>
    );
}

export function dateSort(a:PageTableItem, b:PageTableItem) {
    if(a.updateDateMili < b.updateDateMili) {return -1;}
    if(a.updateDateMili > b.updateDateMili) {return 1;}
    return 0;
}

export interface IStatusIndicatorData {
    statusProps: IStatusProps;
    label: string;
}

export function getStatusIndicatorData(daysOld: number, threshhold:number): IStatusIndicatorData {
    const indicatorData: IStatusIndicatorData = {
        label: "Success",
        statusProps: { ...Statuses.Success, ariaLabel: "Success" },
    };

    if(daysOld >= threshhold )
    {            
        indicatorData.statusProps = { ...Statuses.Failed, ariaLabel: "Failed" };
        indicatorData.label = "Failed";
    }
    else if (daysOld > threshhold - 7)
    {
        indicatorData.statusProps = { ...Statuses.Warning, ariaLabel: "Warning" };
        indicatorData.label = "Warning";
    }
    return indicatorData;
}

export function GetWorkItemDescriptionText(documentPath:string, documentURL:string, lastUpdatedBy:string, lastUdpatedOn:string, documentOwner:string):string
{
    let documentownertext:string = "";
    if(documentOwner.trim().length >0)
    {
        documentownertext = `<div>The Document Owner is: ${documentOwner}</div>`;
    }
    let descriptionBody:string = `<div>As a team member, I would like to ensure that the Wiki Document is up to date</div><div><br></div><div><a href=\" ${documentURL}\"> ${documentPath}</a></div><div><br></div><div>Please review the documentation to see if there are any things in the document that need to be updated and make the necessary changes.</div><div><br></div>${documentownertext}<div>The Document was last updated on ${lastUdpatedOn} by ${lastUpdatedBy}</div>`;

    return descriptionBody;
}
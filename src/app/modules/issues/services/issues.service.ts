import { getIssues } from '@actions/get-issues.actions';
import { getLabels } from '@actions/get-labels.actions';
import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';




@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
  }));

}

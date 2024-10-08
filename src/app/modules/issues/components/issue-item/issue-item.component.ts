import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '@interfaces/github-issues.interface';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}

import { Routes } from '@angular/router';
import { AddTask } from './components/add-task/add-task';
import { CompletedTasks } from './components/completed-tasks/completed-tasks';
import { ToDoList } from './components/to-do-list/to-do-list';
import { UpdateTask } from './components/update-task/update-task';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'to-do-list',
        pathMatch: 'full',
    },
    {
        path: 'add-task',
        component: AddTask,
    },
    {
        path: 'completed-tasks',
        component: CompletedTasks,
    },
    {
        path: 'to-do-list',
        component: ToDoList,
    },
    {
        path: 'to-do-list/update-task',
        component: UpdateTask,
    },
    {
        path: '**',
        component: NotFound,
    }
];

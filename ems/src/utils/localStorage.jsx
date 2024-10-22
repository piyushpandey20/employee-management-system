const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Complete the monthly report",
        date: "2024-10-15",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Attend the team meeting",
        date: "2024-10-12",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Fix bugs in the project",
        date: "2024-10-10",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Design the UI for the new feature",
        date: "2024-10-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Prepare the project documentation",
        date: "2024-10-12",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Coordinate with the marketing team",
        date: "2024-10-17",
        category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Test the new feature",
        date: "2024-10-20",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Deploy the application",
        date: "2024-10-15",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Create unit tests for the new module",
        date: "2024-10-18",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Fix critical bug in production",
        date: "2024-10-16",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 3",
        description: "Optimize the database queries",
        date: "2024-10-11",
        category: "Database"
      }
    ]
  },
  {
    id: 5,
    firstName: "Amit",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1",
        description: "Conduct code review",
        date: "2024-10-12",
        category: "Code Review"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Prepare for client presentation",
        date: "2024-10-19",
        category: "Client Work"
      }
    ]
  }
];

  
  const admin = [
    {
      id: 1,
      email: "admin@me.com",
      password: "123"
    }
  ];

export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees)); 
    localStorage.setItem("admin",JSON.stringify(admin)); 
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const admin = JSON.parse(localStorage.getItem("admin") || "[]");

    return {employees,admin}
}
  
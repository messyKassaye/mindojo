from typing import List

def analyze_water_flow(grid: List[List[int]]):
    rows = len(grid)
    cols = len(grid[0])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    def dfs(row, col, visited, prev_height):
        if (row < 0 or col < 0 or row >= rows or col >= cols or 
            visited[row][col] or grid[row][col] < prev_height):
            return
        visited[row][col] = True
        for dx, dy in directions:
            dfs(row + dx, col + dy, visited, grid[row][col])

    northwest_visited = [[False] * cols for _ in range(rows)]
    southeast_visited = [[False] * cols for _ in range(rows)]

    for col in range(cols):
        dfs(0, col, northwest_visited, grid[0][col])  # First row
        dfs(rows - 1, col, southeast_visited, grid[rows - 1][col])  # Last row
    for row in range(rows):
        dfs(row, 0, northwest_visited, grid[row][0])  # First column
        dfs(row, cols - 1, southeast_visited, grid[row][cols - 1])  # Last column

    count = sum(northwest_visited[row][col] and southeast_visited[row][col]
                for row in range(rows) for col in range(cols))

    return  count

import os

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\dashboard.html'

content = """{% extends 'webashaApp/base.html' %}

{% block content %}
<div class="cards">
    <div class="card">
        <div class="num">{{ stats.num_courses }}</div>
        <div class="label">Number of Courses</div>
    </div>
    <div class="card">
        <div class="num">{{ stats.num_lessons }}</div>
        <div class="label">Number of Lessons</div>
    </div>
    <div class="card">
        <div class="num">{{ stats.num_enrollments }}</div>
        <div class="label">Number of Enrollment</div>
    </div>
    <div class="card">
        <div class="num">{{ stats.num_students }}</div>
        <div class="label">Number of Students</div>
    </div>
    <div class="card">
        <div class="num">{{ stats.num_instructors }}</div>
        <div class="label">Number of Instructor</div>
    </div>
</div>

<div class="content-row">
    <div class="panel">
        <div class="panel-header">
            <h4>Admin Revenue This Year</h4>
        </div>
        <div class="chart-wrap">
            <canvas id="lineChart"></canvas>
        </div>
    </div>

    <div class="panel side-panel">
        <div class="panel-header">
            <h4>Course Status</h4>
            <span class="view-all">→</span>
        </div>
        <div class="status-container">
            <div class="chart-box">
                <canvas id="doughnutChart"></canvas>
            </div>
            <div class="status-legend">
                <div class="legend-item"><span class="dot active"></span> Active</div>
                <div class="legend-item"><span class="dot upcoming"></span> Upcoming</div>
                <div class="legend-item"><span class="dot pending"></span> Pending</div>
                <div class="legend-item"><span class="dot private"></span> Private</div>
                <div class="legend-item"><span class="dot draft"></span> Draft</div>
                <div class="legend-item"><span class="dot inactive"></span> Inactive</div>
            </div>
        </div>
    </div>
</div>

<div class="bottom-row">
    <div class="panel withdrawal-panel">
        <div class="panel-header">
            <h4>Pending Requested withdrawal</h4>
            <span class="view-all">→</span>
        </div>
        <div class="withdrawal-content">
            <div class="user-info">
                <div class="name">Name: James Mariyati</div>
                <div class="email">Email: instructor@example.com</div>
            </div>
            <div class="amount-box">
                <div class="amount">100 ₹</div>
                <div class="amount-label">Requested withdrawal amount</div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Line Chart
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        const ctx = lineCtx.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Admin Revenue',
                    data: {{ revenue_data|safe }},
                    borderColor: '#3b82f6',
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#3b82f6',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8,
                            padding: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f3f4f6' },
                        ticks: { color: '#9ca3af', font: { size: 11 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 11 } }
                    }
                }
            }
        });
    }

    // Doughnut Chart
    const doughnutCtx = document.getElementById('doughnutChart');
    if (doughnutCtx) {
        const dctx = doughnutCtx.getContext('2d');
        new Chart(dctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: {{ status_data|safe }},
                    backgroundColor: ['#10b981', '#3b82f6', '#f43f5e', '#1f2937', '#9ca3af', '#d1d5db'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: { legend: { display: false } }
            }
        });
    }
});
</script>

<style>
    .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .view-all {
        color: #3b82f6;
        font-size: 18px;
        cursor: pointer;
    }

    .status-container {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .chart-box {
        width: 150px;
        height: 150px;
    }

    .status-legend {
        flex: 1;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
        font-size: 13px;
        color: #4b5563;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 3px;
    }

    .dot.active { background: #10b981; }
    .dot.upcoming { background: #3b82f6; }
    .dot.pending { background: #f43f5e; }
    .dot.private { background: #1f2937; }
    .dot.draft { background: #9ca3af; }
    .dot.inactive { background: #d1d5db; }

    .bottom-row {
        margin-top: 16px;
    }

    .withdrawal-panel {
        max-width: 600px;
    }

    .withdrawal-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .user-info .name {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 4px;
    }

    .user-info .email {
        color: #6b7280;
        font-size: 13px;
    }

    .amount-box {
        text-align: right;
    }

    .amount {
        font-size: 18px;
        font-weight: 700;
        color: #1f2937;
    }

    .amount-label {
        font-size: 12px;
        color: #6b7280;
    }

    .panel h4 {
        margin-top: 0;
        margin-bottom: 24px;
        font-size: 16px;
        color: #0f172a;
    }

    .cards {
        margin-top: 10px;
    }

    .card {
        padding: 20px 24px !important;
    }

    .card .num {
        margin-bottom: 2px;
    }
</style>
{% endblock %}
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Definitively fixed {path}")

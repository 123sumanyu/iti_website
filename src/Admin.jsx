import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { supabase } from "./supabase";

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Simple auth check - in production use proper Supabase Auth
    const handleLogin = (e) => {
        e.preventDefault();
        if (password === "Ramu@630ITI") {
            setIsAuthenticated(true);
            fetchRequests();
        } else {
            setError("Invalid password");
        }
    };

    const fetchRequests = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("admission_requests")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching requests:", error);
            setError("Failed to fetch admission requests. Please check Supabase configuration.");
        } else {
            setRequests(data || []);
        }
        setLoading(false);
    };

    const inputStyle = {
        width: "100%",
        padding: "0.85rem 1rem",
        borderRadius: "0.75rem",
        border: "1px solid #cbd5e1",
        background: "white",
        color: "#1e293b",
        fontSize: "1rem",
        boxSizing: "border-box",
        marginTop: "0.5rem",
        outline: "none",
        transition: "border-color 0.2s ease",
    };

    const labelStyle = {
        display: "block",
        fontWeight: 600,
        color: "#334155",
        fontSize: "0.95rem",
    };

    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc" }}>
                <Navbar />
                <div style={{ height: "75px" }}></div>

                <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
                    <div style={{ width: "100%", maxWidth: "400px", background: "white", borderRadius: "1.25rem", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", padding: "2.5rem" }}>
                        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#0f172a", fontSize: "1.75rem", fontWeight: 800 }}>Admin Access</h2>

                        {error && (
                            <div style={{ padding: "0.75rem", marginBottom: "1.5rem", borderRadius: "0.5rem", backgroundColor: "#fee2e2", color: "#991b1b", textAlign: "center", fontSize: "0.9rem", fontWeight: 600 }}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin}>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={labelStyle}>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter admin password"
                                    style={inputStyle}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" style={{ width: "100%", background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", color: "white", padding: "1rem", borderRadius: "0.75rem", fontWeight: 700, fontSize: "1.1rem", border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(15, 23, 42, 0.2)" }}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif" }}>
            <Navbar />
            <div style={{ height: "75px" }}></div>

            <main style={{ padding: "3rem 2rem", flexGrow: 1, maxWidth: "1200px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
                    <div>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a", margin: "0 0 0.5rem 0", letterSpacing: "-0.025em" }}>Admission Dashboard</h1>
                        <p style={{ color: "#64748b", margin: 0, fontSize: "1.1rem" }}>View and manage all student admission requests.</p>
                    </div>
                    <button
                        onClick={fetchRequests}
                        style={{ padding: "0.75rem 1.5rem", background: "white", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}
                    >
                        {loading ? "Refreshing..." : "Refresh Data"}
                    </button>
                </div>

                {error && (
                    <div style={{ padding: "1rem", marginBottom: "2rem", borderRadius: "0.75rem", backgroundColor: "#fee2e2", color: "#991b1b", fontWeight: 600 }}>
                        {error}
                        <p style={{ marginTop: "0.5rem", fontWeight: 400, fontSize: "0.9rem" }}>Note: Please make sure you have created the 'admission_requests' table in your Supabase project.</p>
                    </div>
                )}

                <div style={{ background: "white", borderRadius: "1rem", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.05)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                            <thead style={{ background: "#f1f5f9", borderBottom: "1px solid #e2e8f0" }}>
                                <tr>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#475569", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Name</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#475569", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Contact</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#475569", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dept / Sector</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#475569", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Course</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#475569", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.length === 0 && !loading && !error && (
                                    <tr>
                                        <td colSpan="5" style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                                            No admission requests found.
                                        </td>
                                    </tr>
                                )}
                                {loading && requests.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                                            Loading requests...
                                        </td>
                                    </tr>
                                )}
                                {requests.map((req, idx) => (
                                    <tr key={req.id || idx} style={{ borderBottom: "1px solid #e2e8f0", backgroundColor: idx % 2 === 0 ? "white" : "#f8fafc" }}>
                                        <td style={{ padding: "1rem 1.5rem" }}>
                                            <div style={{ fontWeight: 600, color: "#0f172a" }}>{req.name}</div>
                                            <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.25rem" }}>DOB: {req.dob}</div>
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem" }}>
                                            <div style={{ color: "#334155" }}>{req.mobile}</div>
                                            <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.25rem" }}>{req.email}</div>
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem" }}>
                                            <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", background: "#e0e7ff", color: "#4338ca", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                                                {req.department}
                                            </span>
                                            {req.sector && req.sector !== req.department && (
                                                <div style={{ fontSize: "0.85rem", color: "#64748b" }}>{req.sector}</div>
                                            )}
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem", color: "#334155", fontWeight: 500 }}>{req.course}</td>
                                        <td style={{ padding: "1rem 1.5rem", color: "#64748b", fontSize: "0.9rem" }}>
                                            {req.created_at ? new Date(req.created_at).toLocaleDateString() : "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

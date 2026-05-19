class ErrorBoundary extends React.Component {
    state = {hasError: false };

    static getDerivedStateFromError(error) {
        return {hasError: true, error: error};
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
       if(this.state.hasError)
        return <h4>{this.props.fallback}</h4>;
       return this.props.children;  
    }
}
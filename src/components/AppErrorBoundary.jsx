import React from "react";

class AppErrorBoundary extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error, { componentStack }) {
        const { logger } = this.props;
        if (logger) {
            logger.error('Caught error in ErrorBoundary', { componentStack }, error);
        }
    }

    render() {
        return this.props.children;
    }
}

export default AppErrorBoundary;
